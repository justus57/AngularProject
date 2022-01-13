import { Injectable } from '@angular/core';
import { Task } from '../components/Task';
import {HttpClient,HttpHandler, HttpHeaders } from '@angular/common/http';
import {TASKS} from "../components/mock-tasks"
import { Observable,of } from 'rxjs' ;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  addTask(task: Task) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }
  getTask(): Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl);  
  }
  deleteTask(): Observable<Task>{
    const url = '${this.apiUrl}/${task.id}';
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  

}






