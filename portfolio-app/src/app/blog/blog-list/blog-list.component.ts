import { Component } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  date = new Date();
  //blogDetail: BlogCardComponent = new BlogCardComponent();
  //console.log(blogDetail.title)
}
