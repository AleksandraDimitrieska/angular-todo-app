import { Http,Response, Headers, RequestOptionsArgs, RequestMethod } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Task } from "./task.interface";
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from "./auth.service";

@Injectable()
export class TaskService {
    private tasksUrl = 'http://localhost:8000/api/tasks';
    private UpdateTasksUrl = 'http://localhost:8000/api/tasks';
    private getCommentsUrl = 'http://localhost:8000/api/comments';
    private urlCompleted = 'http://localhost:8000/api/taskIsCompleted';
    private urlNotCompleted = 'http://localhost:8000/api/taskIsNotCompleted';
    private getUserUrl = 'http://localhost:8000/api/user';
    private signOutUrl = 'http://localhost:8000/api/signout';
    public task1:Task;
    constructor(private http: Http, private authService: AuthService) {

    }
    
      
   
    addTask(title: string, body:string, category:string, urgency:string, importancy:string, isFinished:boolean){
        const token = this.authService.getToken();//ako go nemame tokenot, ke vrati null, a ako vrati null ke imame greska vo ang

        const content = JSON.stringify({title:title,body:body,category:category,urgency:urgency,importancy:importancy,isFinished:isFinished});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:8000/api/task?token='+token,content,{headers:headers})
        .map(
            (response: Response) => {
                return response.json().task;//go zemame taskot za da mozeme da go dodademe vo nizata tasks
            }
        );
    }
   
    updateTask(id:number,title: string, body:string, category:string, urgency:string, importancy:string, isFinished:boolean){
        const token = this.authService.getToken();
        const content = JSON.stringify({title:title,body:body,category:category,urgency:urgency,importancy:importancy,isFinished:isFinished});
        const headers = new Headers({'Content-Type':'application/json'});
        const url1=`${this.UpdateTasksUrl}/${id}?token=${token}`;
        return this.http.put(url1,content,{headers:headers})
        .map(
            (response: Response) => {
                return response.json().task;
            }
        );
    }

    getTasks(): Observable<any> {
    	return this.http.get('http://localhost:8000/api/tasks')
    	.map(
    			(response: Response) => {
    				return response.json().tasks;
    			}
    		);
    }
    
    getComments(id:number): Observable<any> {
        const token = this.authService.getToken();
        
        const url = `${this.getCommentsUrl}/${id}?token=${token}`;
        return this.http.get(url)
        .map(
            (response:Response) => {
                return response.json().comments;
            }
        )
    }

    getUsers(): Observable<any> {
    	return this.http.get('http://localhost:8000/api/users')
    	.map(
    			(response: Response) => {
    				return response.json().users;
    			}
    		);
    }

    getUser(id:number):Observable<any> {
        const token = this.authService.getToken();
        
        const url = `${this.getUserUrl}/${id}?token=${token}`;
        return this.http.get(url)
        .map(
            (response: Response) => {
                return response.json().user;
            }
        )
    }
    getTask(id: number): Observable<Task> {
        const token = this.authService.getToken();
        const url=`${this.tasksUrl}/${id}?token=${token}`;
        return this.http.get(url)
        .map(
            (response: Response) => {
                return response.json().task;
            }
        )
    }

    getQuartal(): Observable<any> {
        return this.http.get('http://localhost:8000/api/tasks')
        .map(
                (response: Response) => {
                    return response.json().tasks;
                }
            );
    }
    getTimeView(): Observable<any> {
        return this.http.get('http://localhost:8000/api/tasks')
        .map(
                (response: Response) => {
                    return response.json().tasks;
                }
            );
    }
    isCompleted(id:number){
        const url2=`${this.urlCompleted}/${id}`;
        const content = JSON.stringify({id:id});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.put(url2,content,{headers:headers});
    }

    isNotCompleted(id:number){
        const url2=`${this.urlNotCompleted}/${id}`;
        const content = JSON.stringify({id:id});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.put(url2,content,{headers:headers});
    }

   submitEmail(email:string){
    return this.http.post('http://localhost:8000/api/password/email',
    {email:email},
    {headers: new Headers({'Content-Type':'application/json'})})
    .map(
        (response: Response)=> {
          const token=response.json().token;
          //const base64Url = token.split('.')[1];
          //const base64  = base64Url.replace('-','+').replace('_','/');
          return {token:token};   
        }
      )
   }

   submitResetPassword(email:string,password:string,password_confirmation:string, token:string){
    return this.http.post('http://localhost:8000/api/password/reset',
    {email:email, password:password,password_confirmation:password_confirmation, token:token},
    {headers: new Headers({'Content-Type':'application/json'})})
    // .map(
    //     (response: Response)=> {
    //       const token=response.json().token;
    //       return {token:token};   
    //     }
    //   )
   }

   deleteTask(task: Task):Observable<any> {
        const token = this.authService.getToken();
        //const id = typeof task === 'number' ? task : task.id;
        const id = task.id;
        const url2 = `${this.UpdateTasksUrl}/${id}?token=${token}`;
        return this.http.delete(url2);
    }

    signOut():Observable<any> {
        const token = this.authService.getToken();
        const url = `${this.signOutUrl}?token=${token}`;
        return this.http.post(url,{token:token});
    }
}
