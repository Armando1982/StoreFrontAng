import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { ResponseCustomer } from '../interfaces/ResponseCustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;
  constructor() { }

  list():Observable<ResponseCustomer>{
    return this.http.get<ResponseCustomer>(`${this.baseUrl}Customer`);
   }
 
}
