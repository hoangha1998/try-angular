import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-color',
  templateUrl: './setting-color.component.html',
  styleUrls: ['./setting-color.component.css']
})
export class SettingColorComponent implements OnInit {
  color: string;

  constructor() {
    this.color = '';
  }

  ngOnInit() {
  }

  setStyle() {
    return {
      'color': this.color
    };
  }

  onChangeColor(color: string) {
    this.color = color;
  }

  onResetColor(): void {
    this.color = '';
  }

}
