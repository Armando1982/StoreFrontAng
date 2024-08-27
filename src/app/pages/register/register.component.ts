import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AccesoService } from '../../services/acceso.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private serviceAccess = inject(AccesoService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formRegister:FormGroup=this.formBuild.group(
    {
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });

    register(){
      if(this.formRegister.invalid)return;

      const objUser:User={
        userName:this.formRegister.value.name,
        email:this.formRegister.value.email,
        password:this.formRegister.value.password
      }

      this.serviceAccess.register(objUser).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            this.router.navigate([''])
          }else{
            alert("There an issue in register process")
          }
        },
          error:(error)=>{
            console.log(error.message)
          }
      })
    }
    back(){
      this.router.navigate([''])
    }
}
