import { Injectable } from '@angular/core';
import { Task } from '../components/Task';
import {HttpClient,HttpHandler } from '@angular/common/http';
import {TASKS} from "../components/mock-tasks"
import { Observable,of } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }
  getTask(): Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl);  
  }
  deleteTask(): Observable<Task>{
    const url = '${this.apiUrl}/${task.id}';
    return this.http.delete<Task>(url);
  }


}
