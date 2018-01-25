import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor( private taskService:TaskService,private router:Router,private activatedRoute: ActivatedRoute) { }
  token: string;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      console.log(this.token);
  });
  }

  onResetPassword(form: NgForm){
    if(form.value.password != form.value.password_confirmation) {alert('passwords do not match');}
    this.taskService.submitResetPassword(form.value.email,form.value.password,form.value.password_confirmation,this.token)
      .subscribe(
        ()=>console.log("yess")
      );
      //this.router.navigate(['/password/reset']);
      
  }

  }

//}
