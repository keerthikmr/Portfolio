import { Component } from '@angular/core';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, ExperienceListComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
