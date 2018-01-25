import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';
import { AuthService } from '../auth.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

	importancy: string;
	urgency: string;
	quartalView: boolean;
	timeView: boolean;
	@Input() task: Task;
	@Input() tasks: Task[];
  constructor(private authService: AuthService,private taskService: TaskService,private route: ActivatedRoute,private router: Router) 
  {
  	this.quartalView = true;
	  this.timeView = false;
	  
   }

   //when the page is loaded, then check if the user is logged in.
 ngAfterViewInit() {
    if(!this.authService.getToken()) {
        this.router.navigate(['/signin']);
        alert('Not logged in, please log in to continue');

    }

 }

  ngOnInit() {
	this.task = this.taskService.task1;
	//console.log(this.task);
	  this.quartal();
	  
  }

quartal() {
  		this.quartalView = true;
  		this.timeView = false;

  		this.taskService.getQuartal()
  		.subscribe(
  			(tasks: Task[]) => this.tasks=tasks,
  			(error: Response) => console.log(error)
  		);

	  }

  	time() {
  		this.timeView = true;
  		this.quartalView = false;
	  }

	isComplete(id,isFinished)
	{
		if (isFinished==0) //ako momentalno e 0, toa znaci deka koga ke se klikne ke se kompletira
		{
			//const id = +this.route.snapshot.paramMap.get('id');
			this.taskService.isCompleted(id)
				.subscribe(
					()=>alert('Task is completed!')
				);
		}
		else if (isFinished==1) 
		{
			//const id = +this.route.snapshot.paramMap.get('id');
			this.taskService.isNotCompleted(id)
				.subscribe(
					()=>alert('Task is not completed!')
				);
		}
	}


	onDelete(task: Task):void {
		this.tasks = this.tasks.filter(t=>t !==task);
		this.taskService.deleteTask(task)
		.subscribe(
			//() => alert('delete')
		);

	}

}
