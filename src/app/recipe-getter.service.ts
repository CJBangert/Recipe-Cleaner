import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeGetterService {

  backendUrl: string = "http://127.0.0.1:5000"
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  errorMessage : string = "<div>Error processing request. Please check your url.<div>"

  constructor(private http: HttpClient) {}


  getContent(url:string): void   {
    const apiCallUrl = `${this.backendUrl}/getShortRecipe`;
    console.log(apiCallUrl)
    let params = new HttpParams().set('url', url);
    const response = this.http.get(apiCallUrl, {params: params}).subscribe({
      next: (data) => {
        this.dataSubject.next(data)
      },
      error: (error) => {
        this.handleSpecificError(error)
      }
    });
  }

  private handleSpecificError(error: HttpErrorResponse): void {
    // Specific error handling
    if (error.status === 404) {
      console.error('Not Found:', error.message);
    } else if (error.status === 500) {
      console.error('Server Error:', error.message);
    } else {
      console.error('Unknown Error:', error.message);
    }
    this.dataSubject.next({'body':this.errorMessage})
  }

}
