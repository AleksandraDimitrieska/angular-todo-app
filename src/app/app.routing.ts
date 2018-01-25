import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { QuartalComponent } from "./quartal/quartal.component";
import { TimeComponent} from "./time/time.component";
import { ViewComponent } from "./view/view.component";
import { TaskComponent } from "./task/task.component";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { EmailComponent } from "./email/email.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignoutComponent } from "./signout/signout.component";
const APP_ROUTES: Routes = [
    { path: 'tasks', component: TasksComponent },
    { path: 'new-task', component: NewTaskComponent },
    { path: 'quartal', component: QuartalComponent },
    { path: 'time', component: TimeComponent },
    { path: 'views', component: ViewComponent },
    { path: 'task/:id', component: TaskComponent },
    { path: 'task/edit/:id', component: EditComponent },
    { path: 'task/delete/:id', component: DeleteComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'password/email', component: EmailComponent },
    { path: 'password/reset', component: ResetPasswordComponent },
    { path: 'signout', component: SignoutComponent }
];

export const routing: ModuleWithProviders= RouterModule.forRoot(APP_ROUTES);