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
    {title: 'Angular Basics', authorName: 'Keerthi Kumar', dateCreated: this.date, content: 'lorem ipsum', image_url: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {title: '.NET core', authorName: 'Keerthi Kumar', dateCreated: this.date, content: 'lorem ipsum', image_url: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  ];
}
