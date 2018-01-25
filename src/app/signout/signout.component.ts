import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { AuthService } from '../auth.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private taskService: TaskService, private authService:AuthService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.signOut();
  }

  signOut():void
  {
    this.authService.removeToken();
    alert('Not logged in, please log in to continue');
    this.router.navigate(['/signin']);
  }
}
