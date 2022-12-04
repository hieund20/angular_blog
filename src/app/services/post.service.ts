import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected path = 'http://localhost:3000';

  constructor(protected httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get(this.path + '/posts');
  }
}
