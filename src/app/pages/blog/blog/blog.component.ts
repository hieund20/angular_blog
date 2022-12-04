import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { SendPostService } from '../service/send-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  categories: any[] = [];
  posts: any[] = [];
  tocList: any[] = [];

  constructor(
    private postService: PostService,
    private cateService: CategoryService,
    public sendPostService: SendPostService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllPost();
  }

  getAllCategory() {
    this.cateService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  getAllPost() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  onChangeCategory(data: MatSelectionListChange) {
    let list: any[] = [];
    this.posts.forEach((el: any) => {
      if (el.category_id === data.source._value?.toString()) {
        list.push(el);
      }
    });
    this.tocList = list;
  }

  onChoosePost(post: any) {
    this.sendPostService.postData.next(post.content);
  }
}
