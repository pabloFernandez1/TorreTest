import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { skillMain } from '../../models/mainSkillModel';
import { skill } from 'src/app/models/skillModel';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  innerBody:skill ={
    experience : '',
    text : ''
  }
  body:skillMain = {
    "skill":this.innerBody

  }
  constructor(private http: HttpClient) { }
  searchJob(field: string, offset:number){
    this.body["skill"].text=field;
    this.body["skill"].experience = "potential-to-develop";
    return this.http.post(
      "http://13.58.231.166:8080/favApp-1/searchJobs?offset="+offset,
      this.body
      ).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error){
    let errorMessage ='';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(error);
    return throwError(errorMessage);
  }
}
