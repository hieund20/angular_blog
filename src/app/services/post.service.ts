import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //http://localhost:3000
  protected path = 'https://angular-blog-be.herokuapp.com';

  constructor(protected httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get(this.path + '/posts');
  }
}
