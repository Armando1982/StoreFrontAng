import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { authGuard } from './custom/auth.guard';
import { StoreComponent } from './pages/store/store.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"customer",component:CustomerComponent,canActivate:[authGuard]},
    {path:"store",component:StoreComponent,canActivate:[authGuard]},
    {path:"articles",component:ArticlesComponent,canActivate:[authGuard]},
    //{path:"shoppingcart",component:ShoppingCartComponent,canActivate:[authGuard]},
    //{path:"login",component:LoginComponent,canActivate:[authGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }