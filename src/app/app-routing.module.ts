import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {path:'', loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent ),
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent)},
      {path:'about',loadComponent:()=>import('./components/about/about.component').then((m)=>m.AboutComponent)}, 
      {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent)},
      {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent  )},
     
      {path:'brand',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent)},
      {path:'categiries',loadComponent:()=>import('./components/categoires/categoires.component').then((m)=>m.CategoiresComponent)},
  
    ]
  },

 
    
 {path:'', loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent )},
    {path:'register',loadComponent:()=>import('./components/regisiter/regisiter.component').then((m)=>m.RegisiterComponent )}
    
  ]
 },

 {path:'**',loadComponent:()=>import('./components/not/not.component').then((m)=>m.NotComponent)}

  
  
    
   
    
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
