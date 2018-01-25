import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) { }
  token: string;
  ngOnInit() {
  }


  onSubmit(form: NgForm){
    var selfComp = this;
    this.taskService.submitEmail(form.value.email)
      .subscribe(

        function(token: any){
          selfComp.token = token,
          console.log(selfComp.token)
          //console.log(compoSelf.tasks);
        },
        (error: Response) => console.log(error) 
      );      
  }
}

