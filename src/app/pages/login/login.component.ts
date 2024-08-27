import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Login } from '../../interfaces/Login';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private serviceAccess = inject(AccesoService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formLogin:FormGroup=this.formBuild.group(
    {
      email:['',Validators.required],
      password:['',Validators.required]
    });

    initSession(){
      if(this.formLogin.invalid)return;

      const obj:Login={
        email:this.formLogin.value.email,
        password:this.formLogin.value.password
      }
      this.serviceAccess.access(obj).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            localStorage.setItem("token",data.token)
            this.router.navigate(['customer'])
          }else{
            alert("There an issue in your credentials")
          }
        },
          error:(error)=>{
            console.log(error.message)
          }
      })
    }

    register()
    {
      this.router.navigate(['register'])
    }
  }
