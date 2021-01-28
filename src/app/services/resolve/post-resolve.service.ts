import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';
import {PostService} from '../../services';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postService: PostService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getPosts();
  }
}
