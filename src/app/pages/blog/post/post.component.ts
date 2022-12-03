import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: string = '';
  href: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.href = window.location.href;
    this.post = './assets/posts/' + articleName + '.md';
  }
}
