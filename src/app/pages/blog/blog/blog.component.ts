import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  categories: any[] = [
    {
      key: 'TECH',
      cate: 'Technical',
    },
    {
      key: 'LIFE',
      cate: 'Cuộc sống',
    },
  ];
  posts: any[] = [];

  ngOnInit(): void {}

  onChangeCategory(data: MatSelectionListChange) {
    let path = `../../../../assets/posts/${data.source._value}`;
  }
}
