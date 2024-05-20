import { Component } from '@angular/core';
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
  title = 'Angular basics';
  authorName = 'Keerthi Kumar';
  dateCreated = '20/5/2024';
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet";
  image_url = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
}

