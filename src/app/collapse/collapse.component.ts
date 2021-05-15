import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

export interface DataCollapseChange {
  collapseId: string;
  selected: boolean;
};

let uuid: number = 0;

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollapseComponent implements OnInit {
  @Input() title: string = '';
  @Input() selected: boolean = false;

  @Output() selectedChange: EventEmitter<DataCollapseChange> = new EventEmitter<DataCollapseChange>();

  private _id: number = 0;

  constructor() { }

  ngOnInit(): void {
    this._id = ++uuid;
  }

  get collapseId() {
    return 'app-collapse-' + this._id;
  }

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit({
      collapseId: this.collapseId,
      selected: this.selected
    })
  }
}
