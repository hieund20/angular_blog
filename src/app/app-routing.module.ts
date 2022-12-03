import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { PostComponent } from './pages/blog/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'blog/posts',
    component: BlogComponent,
  },
  {
    path: 'blog/posts/:article',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
