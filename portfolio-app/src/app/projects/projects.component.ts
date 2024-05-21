import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
