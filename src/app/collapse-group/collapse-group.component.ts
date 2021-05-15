import { Component, ContentChild, OnInit, AfterContentInit, Input, ContentChildren, QueryList, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CollapseComponent } from '../collapse/collapse.component';

@Component({
  selector: 'app-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.scss']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(CollapseComponent) collapses: QueryList<CollapseComponent> | undefined;
  @Input() multiple: boolean = true;

  private _subscriptions: Subscription[] = [];

  //@ts-ignore
  private _changeSubs: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.initListener();
    //@ts-ignore
    this._changeSubs = this.collapses?.changes.subscribe(() => {
      this.clearListener();
      this.initListener();
    })

  }

  initListener() {
    this.collapses?.forEach(collapse => {
      let subscription = collapse.selectedChange.subscribe(coll => {
        console.log(coll);
        if (!this.multiple && coll.selected) {
          this.toggleCollapse(coll);
        }
      });
      this._subscriptions.push(subscription)
    })
  }


  toggleCollapse(collapse: any) {
    this.collapses?.forEach(c => {
      if (c.collapseId != collapse.collapseId) {
        c.selected = false;
      }
    })
  }

  clearListener() {
    if (this._subscriptions && this._subscriptions.length) {
      this._subscriptions.forEach(sub => sub.unsubscribe())
    }
    this._subscriptions = [];
  }

  ngOnDestroy() {
    this.clearListener();
    if (this._changeSubs) {
      this._changeSubs.unsubscribe();
    }
  }

}
