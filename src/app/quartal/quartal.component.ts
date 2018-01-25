import { Component, OnInit,Input } from '@angular/core';
import { Response } from '@angular/http';
import { Task } from '../task.interface';

import { TaskService } from '../task.service';
@Component({
  selector: 'app-quartal',
  templateUrl: './quartal.component.html',
  styleUrls: ['./quartal.component.css']
})
export class QuartalComponent implements OnInit {
	@Input() task: Task;
	@Input() tasks: Task[];
  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  }

  onGetQuartal() {
  	this.taskService.getQuartal()
  		.subscribe(
  			(tasks: Task[]) => this.tasks=tasks,
  			(error: Response) => console.log(error)
  		);
  }

}
