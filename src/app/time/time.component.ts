import { Component, OnInit,Input } from '@angular/core';
import { Response } from '@angular/http';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
	@Input() task: Task;
	@Input() tasks: Task[];
  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  }

  onGetTime() {
  	this.taskService.getTimeView()
  		.subscribe(
  			(tasks: Task[]) => this.tasks=tasks,
  			(error: Response) => console.log(error)
  		);
  }

}
