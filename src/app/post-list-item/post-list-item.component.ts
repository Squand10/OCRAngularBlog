import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postDate: Date;
  @Input() postText: string;
  @Input() postVotes: number;

  constructor() { }

  ngOnInit() { }


  getColor() {
    if (this.postVotes > 0) {
      return 'green';
    } else if (this.postVotes < 0) {
      return 'red';
    } else {
      return 'white';
    }
  }
  Upvote(){
    this.postVotes += 1;
  }

  Downvote(){
    this.postVotes -= 1;
  }
}
