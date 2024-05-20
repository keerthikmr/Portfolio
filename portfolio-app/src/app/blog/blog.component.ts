import { Component } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

} 
