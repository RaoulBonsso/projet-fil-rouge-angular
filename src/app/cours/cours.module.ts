import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
