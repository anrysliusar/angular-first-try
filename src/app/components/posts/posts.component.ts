import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  posts: Post[];
  chosenPost: Post;

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  getBubblePost(post: Post): void {
    this.chosenPost = post;
  }
}
