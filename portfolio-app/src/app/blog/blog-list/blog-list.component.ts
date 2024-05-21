import { Component } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  date = new Date().getDate().toString();
  month = new Date().getMonth().toString();
  year = new Date().getFullYear().toString();

  formattedDate = this.date + '/' + this.month + '/' + this.year;

  blogs = [
    { title: 'Angular', authorName: 'Keerthi Kumar', dateCreated: this.formattedDate, content: 'lorem ipsum', post_image_url: 'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp', post_badge_url: 'https://th.bing.com/th/id/OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3?rs=1&pid=ImgDetMain' },
    { title: '.NET core', authorName: 'Keerthi Kumar', dateCreated: this.formattedDate, content: 'lorem ipsum', post_image_url: 'https://www.pngitem.com/pimgs/m/531-5318011_microsoft-net-logo-microsoft-net-logo-png-transparent.png', post_badge_url: 'https://pngset.com/images/c-net-logo-symbol-trademark-first-aid-transparent-png-628154.png' },
    { title: 'SQL server', authorName: 'Keerthi Kumar', dateCreated: this.formattedDate, content: 'lorem ipsum', post_image_url: 'https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2015/05/sqlserver_0.jpg?itok=s1MxFUfz', post_badge_url: 'https://library.kissclipart.com/20181123/oyq/kissclipart-sql-db-clipart-microsoft-azure-sql-database-d8fe86afd77ee124.jpg' },
    { title: 'Azure', authorName: 'Keerthi Kumar', dateCreated: this.formattedDate  , content: 'lorem ipsum', post_image_url: 'https://th.bing.com/th/id/OIP.5Zgd7tKg7y5c9_drW_1x4wAAAA?rs=1&pid=ImgDetMain', post_badge_url: 'https://swimburger.net/media/ppnn3pcl/azure.png' },
  ];
}
