import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  userId: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(() => {
      this.userId = this.router.getCurrentNavigation().extras.state.id as number;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsData);
  }

}
