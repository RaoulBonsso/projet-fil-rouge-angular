import { Component } from '@angular/core';

interface Course {
  name: string;
  description: string;
  duration: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [];
  newCourse: Course = { name: '', description: '', duration: '' };

  addCourse() {
    this.newCourse.isNew = true; 
    this.courses.push({ ...this.newCourse });
    this.newCourse = { name: '', description: '', duration: '' }; // Réinitialiser le formulaire
  }
}
