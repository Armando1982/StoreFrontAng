import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButtonModule, MatMenuModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  private custService = inject(CustomerService);
  public custList:Customer[]=[];
  private router = inject(Router);
  public displayedColumns:string[]=['customerId','customerName','customerAddress']

  constructor(){
    this.custService.list().subscribe({
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
