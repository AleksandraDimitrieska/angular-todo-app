import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {}
}
