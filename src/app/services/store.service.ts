import { inject, Injectable } from '@angular/core';
import { ResponseStore } from '../interfaces/ResponseStore';
import { HttpClient } from '@angular/common/http';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;
  constructor() { }
  list():Observable<ResponseStore>{
    return this.http.get<ResponseStore>(`${this.baseUrl}Stores`);
   }
}
