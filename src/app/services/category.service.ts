import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  protected path = 'http://localhost:3000';

  constructor(protected httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get(this.path + '/categories');
  }
}
