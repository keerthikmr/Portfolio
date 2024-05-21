import { Component } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  date = new Date().getDate().toString();
  blogs = [
    { title: 'Angular Basics', authorName: 'Keerthi Kumar', dateCreated: this.date, content: 'lorem ipsum', post_image_url: 'https://th.bing.com/th/id/OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3?rs=1&pid=ImgDetMain', post_badge_url: 'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp' },
    { title: '.NET core', authorName: 'Keerthi Kumar', dateCreated: this.date, content: 'lorem ipsum', post_image_url: 'https://th.bing.com/th/id/OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3?rs=1&pid=ImgDetMain', post_badge_url: 'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp' },
  ];
}
