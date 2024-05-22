import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() githubLink: string = '';
  @Input() techStack: string[] = [];
  @Input() proj_image_url: string = '';
  @Input() description: string = '';

  cardClick(githubLink: string) {
    const w = window.open(githubLink, '_blank');
    if (w) {
      w.focus();
    }
  }
}
