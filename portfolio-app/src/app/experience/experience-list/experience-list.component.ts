import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {
  experiences = [
    { title: 'Intern', org: 'Enerpac India Pvt Limited', year: 'May 2024 - June 2024', work: ['Built Angular app', 'Did this', 'Did that'], comp_badge_url: 'https://google.com' },
    { title: 'Web developer', org: 'Chingu', year: 'Jan 2024 - April 2024', work: ['Built React app', 'Used APIs', 'Built interactive maps'], comp_badge_url: 'https://google.com' },
    { title: 'Researcher', org: 'MulticoreWare Inc', year: 'Aug 2022 - Present', work: ['Research on H.265 video codec', 'Built compression algorithms', 'Created partition, prediction, encode and decode mechanisms'], comp_badge_url: 'https://google.com' },
  ]
}
