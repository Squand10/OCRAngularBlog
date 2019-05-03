import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Post>;

  constructor() {}

  ngOnInit() {
  }

}
