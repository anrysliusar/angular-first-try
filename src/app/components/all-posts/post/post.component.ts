import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  getChosenPost(): void {
    this.router.navigate([this.post.id], {
        relativeTo: this.activatedRoute,
        state: this.post
      });
  }

}
