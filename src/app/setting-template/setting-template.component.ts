import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-template',
  templateUrl: './setting-template.component.html',
  styleUrls: ['./setting-template.component.css']
})
export class SettingTemplateComponent implements OnInit {
  textDemo = '';
  constructor() {
    this.textDemo = 'Angular 2x is difficult';
  }

  ngOnInit() {
  }

}
