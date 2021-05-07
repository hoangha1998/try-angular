import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  @Output() answerRequest = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(value: number) {
    this.answerRequest.emit(value);
  }
}
