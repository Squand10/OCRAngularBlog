import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


  statut:string;
  @Input() post: Post;

  constructor() { }

  ngOnInit() { }


  getColor() {
    if (this.post.likes > 0) {
      this.statut = "La majorité des visiteurs aiment cet article";
      return 'lightgreen';
    } else if (this.post.likes < 0) {
      this.statut = "La majorité des visiteurs n'aiment pas cet article";
      return 'darksalmon';
    } else {
      this.statut = "Les avis sont partagés";
      return 'lightgrey';
    }
  }
  Upvote(){
    this.post.likes += 1;
  }

  Downvote(){
    this.post.likes -= 1;
  }
}
