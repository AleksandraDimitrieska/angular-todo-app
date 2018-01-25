import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Task } from '../task.interface';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit, OnDestroy{
  task: Task;


  constructor(private authService: AuthService, private taskService: TaskService, private activatedRoute: ActivatedRoute, private router: Router) {}

  importancy: string;
  urgency: string;
  category: string;
  tasknov: Task;
  tasks: Task[]; 

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.category = params['category'];
          this.urgency = params['urgency'];
          this.importancy = params['importancy'];
          this.onGetTasks();
      });
  }

  onGetTasks() {
    var compoSelf = this;
      this.taskService.getTasks()
          .subscribe(
              function(tasks: Task[]){
                compoSelf.tasks = tasks;
                //console.log(compoSelf.tasks);
              },
              (error: Response) => console.log(error)
          );
  }
//when the page is loaded, then check if the user is logged in.
 ngAfterViewInit() {
    if(!this.authService.getToken()) {
        this.router.navigate(['/signin']);
        alert('Not logged in, please log in to continue');
    }
 }

  onSubmit(form: NgForm) {
      var compoSelf = this;
      this.taskService.addTask(form.value.title, form.value.body, form.value.category, form.value.urgency, form.value.importancy, form.value.isFinished)
          .subscribe(
              //success
              function(task: Task) {
                  alert('task added');
                  compoSelf.router.navigate(['/views']);
                },
              //error
              function(error: Response) {
                console.log('woops');
              }
          );
      form.reset();     
  }

  ngOnDestroy() {

  }


}