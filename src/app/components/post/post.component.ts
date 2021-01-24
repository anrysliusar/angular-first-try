import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../../models/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  bubblePostUp = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPost(post: Post): void {
    this.bubblePostUp.emit(post);
  }
}
