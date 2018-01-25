import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

    onSignup(form: NgForm) {
      this.authService.signup(form.value.username, form.value.email,form.value.password)
        .subscribe(
          () => this.router.navigate(['signin']),
          error => console.log(error)
        );
    }
}
