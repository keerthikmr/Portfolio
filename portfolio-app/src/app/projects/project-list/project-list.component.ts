import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects = [
    { title: 'Project1', techStack: 'stack1 stack2', description: 'lorem ipsum', githubLink: 'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp', proj_image_url: 'https://www.bing.com/th?id=OIP.o0-_5Yz2Vr32GtIPXUKTLQHaEo&w=157&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
    { title: 'Project1', techStack: 'stack1 stack2', description: 'lorem ipsum', githubLink: 'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp', proj_image_url: 'https://www.bing.com/th?id=OIP.o0-_5Yz2Vr32GtIPXUKTLQHaEo&w=157&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
  ];
}
