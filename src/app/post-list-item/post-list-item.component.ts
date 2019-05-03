import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  vote: number;

  constructor() { }

  ngOnInit() {
  }


  Upvote(){
    this.vote += 1;
  }

  Downvote(){
    this.vote -= 1;
  }

}
