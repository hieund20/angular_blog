import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: string = '';
  @Input() articleName: string = '';

  constructor() {}

  ngOnInit(): void {
    this.post = './assets/posts/' + this.articleName + '.md';
  }
}
