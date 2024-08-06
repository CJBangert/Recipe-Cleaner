import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    const apiCallUrl = `${this.backendUrl}/getShortRecipe`;
    console.log(apiCallUrl)
    let params = new HttpParams().set('url', url);
    const response = this.http.get(apiCallUrl, {params: params}).subscribe(response => {
      this.dataSubject.next(response);
    });
  }

}
