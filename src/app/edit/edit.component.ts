import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService }  from '../task.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  task: Task;
  
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location,
    private router:Router
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe(
        (task:Task) => this.task = task);
  }
  onSubmit(form: NgForm){
    var compoSelf = this;    
    const id = +this.route.snapshot.paramMap.get('id');    
    this.taskService.updateTask(id,form.value.title,form.value.body,form.value.category,form.value.urgency,form.value.importancy,form.value.isFinished)
      .subscribe(
        //() =>alert('Task updated')
        function(task: Task) {
          console.log('task updated');
          // compoSelf.tasks.push(task);
          compoSelf.router.navigate(['/task/'+id]);
        },
        //error
        function(error: Response) {
          console.log('woops');
          }
      );
    form.reset();
    
    
  }
  
}