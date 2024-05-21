import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})

export class BlogCardComponent {
  //title = 'Angular basics';
  //authorName = 'Keerthi Kumar';
  //dateCreated = '20/5/2024';
  //content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet";
  //image_url = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  //date = new Date();

  // title: string;
  // authorName: string;
  // dateCreated: string;
  // content: string; 
  // image_url: string;

  // constructor() {
  //   this.title = 'adf';
  //   this.authorName = 'asdf';
  //   this.dateCreated = 'asdf';
  //   this.content = 'asdf';
  //   this.image_url = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  // }

  // getTitle(): string {
  //   return this.title;
  // }
  // getAuthorName(): string {
  //   return this.authorName;
  // }
  // getDate(): string {
  //   return this.dateCreated;
  // }
  // getContent(): string {
  //   return this.content;
  // }
  // getImageUrl(): string {
  //   return this.image_url;
  // }
  @Input() title: string = '';
  @Input() authorName: string = '';
  @Input() dateCreated: string = '';
  @Input() content: string = '';
  @Input() post_badge_url: string = '';
  @Input() post_image_url: string = '';
}

