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
  @Input() title: string = '';
  @Input() authorName: string = '';
  @Input() dateCreated: string = '';
  @Input() content: string = '';
  @Input() post_badge_url: string = '';
  @Input() post_image_url: string = '';
}

