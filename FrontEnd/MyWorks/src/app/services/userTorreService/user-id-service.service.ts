import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserIdServiceService {

  constructor(private http: HttpClient) {
   }
   validateId(id: String){
    return this.http.get("http://13.58.231.166:8080/favApp-1/username?username="+id).pipe(
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
