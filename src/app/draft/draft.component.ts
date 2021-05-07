import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  courses: string[] = ['typescript', 'angular', 'nodejs'];
  toeChoice = 'def';
  tab = 'home';
  isList = true;

  constructor() { }

  ngOnInit() {
  }
  switchTab(e): void {
    this.tab = e.target.getAttribute('data-value');
  }

}
