import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {

}
