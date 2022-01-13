import { Component, OnInit } from '@angular/core';

import { Task } from '../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks :Task [] = [];

  constructor(private tasksService :TaskService) { }

  ngOnInit(): void {
  this.tasksService.getTask().subscribe((tasks)=> (this.tasks =tasks));
  }

}
