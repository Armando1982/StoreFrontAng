import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import { ResponseAccess } from '../interfaces/ResponseAccess';
import { Login } from '../interfaces/Login';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;
  constructor() { }

  register(objectAccess:User):Observable<ResponseAccess>{
   return this.http.post<ResponseAccess>(`${this.baseUrl}User/Register`,objectAccess);
  }

  access(objectLogin:Login):Observable<ResponseAccess>{
   return this.http.post<ResponseAccess>(`${this.baseUrl}User/Login`,objectLogin);
  }

  validateToken(token:string):Observable<ResponseAccess>{
    return this.http.get<ResponseAccess>(`${this.baseUrl}User/TokenValidate?token=${token}`);
   }
}
