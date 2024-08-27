import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Articles } from '../../interfaces/Articles';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButtonModule, MatMenuModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  private articlesService = inject(ArticlesService);
  public custList:Articles[]=[];
  private router = inject(Router);
  public displayedColumns:string[]=['articleId','articleName','articleDescription','articlePrice','articleImage']
  constructor(){
    this.articlesService.list().subscribe({
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
