import { Injectable } from '@angular/core';
import { Task } from '../components/Task';
import {HttpClient,HttpHandler } from '@angular/common/http';
import {TASKS} from "../components/mock-tasks"
import { Observable,of } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTask(): Observable<Task[]> {
  const tasks = of(TASKS);
  return tasks;

  }
}
