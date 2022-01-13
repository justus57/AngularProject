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
  deleteTask(task:Task){
    this.tasksService.deleteTask().subscribe(()=> (this.tasks =this.tasks.filter((t)=> t.id !== task.id)));

  }
  ToggleReminder(task: Task){
    task.reminder = !task.reminder;
    console.log(task.reminder)

  }
  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}
