import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeGetterService {

  backendUrl: string = "http://127.0.0.1:5000"
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}


  getContent(url:string): void   {
    const apiCallUrl = `${this.backendUrl}/getShortRecipe/${url}`;
    console.log(apiCallUrl)
    const response = this.http.get(apiCallUrl).subscribe(response => {
      this.dataSubject.next(response);
    });
  }

}
