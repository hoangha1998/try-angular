import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  isEditMode = false;
  constructor() { }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
    console.log(this.isEditMode);
  }

}
