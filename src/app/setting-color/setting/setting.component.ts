import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  @Output() changeColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChaneColor(value: string) {
    this.changeColor.emit(value);
  }

}
