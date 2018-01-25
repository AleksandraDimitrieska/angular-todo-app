import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	tasks: Task[];
  @Input() task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onGetTasks() {
  	this.taskService.getTasks()
  		.subscribe(
  			(tasks: Task[]) => this.tasks=tasks,
  			(error: Response) => console.log(error)
  		);
  }

}
