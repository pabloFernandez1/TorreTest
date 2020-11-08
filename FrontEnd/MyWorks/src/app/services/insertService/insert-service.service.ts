import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InsertServiceService {

  constructor(private http: HttpClient) { }
  insertJob(idUser:string, idJob:string, jobName: string, isFav:boolean){
    return this.http.post(
      "http://13.58.231.166:8080/favApp-1/insertFav?idUser="+idUser+"&idJob="+idJob+"&jobName="+jobName+"&isFav="+isFav,'').pipe(
      catchError(this.errorHandler)
    );
  }
  getJobs(idUser: string, isFav:boolean){
    return this.http.get(
      "http://13.58.231.166:8080/favApp-1/getFavs?userid="+idUser+"&isFav="+isFav).pipe(
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
