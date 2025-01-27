import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'https://localhost:3000/courses';

  constructor(private http: HttpClient) {}
    getCourses(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl)
   }
   getCourseById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`)
   }
}
