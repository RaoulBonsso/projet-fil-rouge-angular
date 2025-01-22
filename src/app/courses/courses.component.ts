import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { name: 'Angular Basics', description: 'Learn the basics of Angular.' },
    { name: 'Advanced Angular', description: 'Deep dive into Angular features.' },
    { name: 'Angular and RxJS', description: 'Understand reactive programming with RxJS.' }
  ];

}
