import { Component, OnInit } from '@angular/core';
import { SendPostService } from '../service/send-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: string = '';

  constructor(public sendPostService: SendPostService) {}

  ngOnInit(): void {
    this.sendPostService.postData.subscribe((res) => {
      this.post = res;
    });
  }
}
