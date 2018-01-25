import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Task } from '../task.interface';
import { Comment } from '../comment.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { TaskService }  from '../task.service';

import { CommentService }  from '../comment.service';
import { User } from '../user.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   task: Task;
   tasks: Task[];
   users: User [];
   comments: Comment [];
   comment: Comment;
   @Output() taskDeleted = new EventEmitter<Task>();
   
  user: User;
  //@Input() tasks: Task[];
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private commentService: CommentService,
    private location: Location,
    private router:Router
  ) { }

  ngOnInit(): void {
  this.getTask();
  this.getComments();
  this.getUser();
  this.getUsers();
}

getTask(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.taskService.getTask(id)
    .subscribe(
      (task:Task) => this.task = task
    );
}

getUser():void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.taskService.getUser(id)
  .subscribe(
    (user:User) => this.user = user
  );  
}
getComments(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.taskService.getComments(id)
  .subscribe(
    (comments:Comment []) => this.comments = comments
  );
}

getUsers(): void {
  this.taskService.getUsers()
  .subscribe(
    (users:User []) => this.users = users
  );
}



Submit(form: NgForm){
  var compoSelf = this;    //this e TaskComponent
  const id = +this.route.snapshot.paramMap.get('id');
  this.commentService.addComment(id,form.value.body)
    .subscribe(
      function(comment: Comment) {
        alert('Comment created'),
       compoSelf.comments.push(comment)
      },
       //error
       function(error: Response) {
         console.log('woops');
         }
    );
  form.reset();
}

}
