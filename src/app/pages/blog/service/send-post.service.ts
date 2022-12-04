import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendPostService {
  postData = new BehaviorSubject<any>([]);

  constructor() { }
}
