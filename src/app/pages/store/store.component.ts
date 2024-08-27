import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { StoreService } from '../../services/store.service';
import { store } from '../../interfaces/Store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButtonModule, MatMenuModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  private storeService = inject(StoreService);
  public custList:store[]=[];
  private router = inject(Router);
  public displayedColumns:string[]=['storeId','storeName','storeAddress']

  constructor(){
    this.storeService.list().subscribe({
      next:(data)=>{
         if(data.value.length > 0){
           this.custList=data.value
         }
      },
      error:(error)=>{
        console.log(error.message)
      }
    })
  }
  customer()
  {
    this.router.navigate(['customer'])
  }
  store()
  {
    this.router.navigate(['store'])
  }
  articles()
  {
    this.router.navigate(['articles'])
  }
}
