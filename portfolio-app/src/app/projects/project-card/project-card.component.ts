import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() githubLink: string = '';
  @Input() techStack: string = '';
  @Input() proj_image_url: string = '';
  @Input() description: string = '';
}
