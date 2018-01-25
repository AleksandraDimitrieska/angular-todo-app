import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptionsArgs, RequestMethod } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class CommentService {
  private createCommentUrl = 'http://localhost:8000/api/comments';
  
  constructor(private http: Http, private authService: AuthService) { }

  addComment(id: number, body:string){
    const token = this.authService.getToken();
    
    const content = JSON.stringify({id:id,body:body});
    const headers = new Headers({'Content-Type':'application/json'});
    const url=`${this.createCommentUrl}/${id}?token=${token}`;
    return this.http.post(url,content,{headers:headers})
    .map(
      (response: Response) => {
          return response.json().comment;
      }
  );
}
}
