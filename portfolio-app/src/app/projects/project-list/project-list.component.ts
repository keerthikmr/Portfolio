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
    { id: 0, title: 'Voice Assisted E-commerce Shopping', techStack: ['Python', 'Flask', 'Bs4', 'pttsx3', 'Sentence Transformers'], description: 'A conversational interface that assists with details of products and product comparision with a voice input and output model', githubLink: 'https://github.com/keerthikmr/Voice-assisted-e-commerce-shopping', proj_image_url: '../../assets/shoppingCart.svg' },
    { id: 1, title: 'Video compression', techStack: ['Python', 'OpenCV', 'H.265'], description: 'A video codec that achieves a 90% compression rate on raw video formats using compression algorithms.', githubLink: 'https://github.com/keerthikmr/video-compression', proj_image_url: '../../assets/videoCompression.svg' },
    { id: 2, title: 'Quiz App', techStack: ['MySQL', 'Python', 'Tkinter', 'PyGame'], description: 'A highly customizable quiz application with scoring mechanisms, user logging, question editing interface and UI customizations', githubLink: 'https://github.com/keerthikmr/Quiz-App', proj_image_url: '../../assets/quiz.svg' },
    { id: 3, title: 'OnTrack', techStack: ['HTML/CSS', 'JavaScript'], description: 'A daily task productivity tool designed to help individuals organize and manage their tasks effectively on a day-to-day basis.', githubLink: 'https://github.com/chingu-voyages/v47-tier1-team-02', proj_image_url: '../../assets/taskList.svg' },
    { id: 4, title: 'DinoStat', techStack: ['React', 'Axios', 'HTML/CSS', 'JavaScript'], description: 'A react web application that shows information about dinosaurs with interactive maps and graphs.', githubLink: 'https://github.com/chingu-voyages/v48-tier2-team-11', proj_image_url: '../../assets/dinosaur.svg' },
    { id: 5, title: 'Kitchen Assistant', techStack: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'Sentence Transformers'], description: 'A web application that keeps track of food inventory, creates priority queues and suggests recipes.', githubLink: 'https://github.com/keerthikmr/acm-hackathon', proj_image_url: '../../assets/recipeFinder.svg' },
  ];
}
