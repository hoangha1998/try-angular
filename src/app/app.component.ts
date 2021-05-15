import { Component, OnInit } from '@angular/core';
import { POSTS } from './services/post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'try-angular';
  posts: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.posts = POSTS.slice();
    }, 500)
  }
}
