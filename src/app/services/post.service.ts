import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts(): Observable<Post[]> {
    return this
      .httpClient
      .get<Post[]>(this.url);
  }
}
