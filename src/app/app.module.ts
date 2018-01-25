import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { routing } from './app.routing';
import { TaskService } from './task.service';
import { QuartalComponent } from './quartal/quartal.component';
import { TimeComponent } from './time/time.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CommentService } from './comment.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';
import { EmailComponent } from './email/email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    NewTaskComponent,
    QuartalComponent,
    TimeComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    SignupComponent,
    SigninComponent,
    EmailComponent,
    ResetPasswordComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [TaskService, CommentService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
