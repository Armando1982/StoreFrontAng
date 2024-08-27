import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import { ResponseArticles } from '../interfaces/ResponseArticles';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;
  constructor() { }
  list():Observable<ResponseArticles>{
    return this.http.get<ResponseArticles>(`${this.baseUrl}Articles`);
   }
}
