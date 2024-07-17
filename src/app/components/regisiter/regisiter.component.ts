import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthComponent } from 'src/app/core/services/auth/auth.component';

@Component({
  selector: 'app-regisiter',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './regisiter.component.html',
  styleUrls: ['./regisiter.component.css']
})
export class RegisiterComponent {

  constructor(private _AuthComponent:AuthComponent){}

  
  formgroup:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:[this.conformpassword]}as FormControlOptions)



  conformpassword(group:FormGroup):void{
    const password=group.get('password');
    const rePassword=group.get('rePassword')
    if(rePassword?.value == ''){
      rePassword.setErrors({required:true})
    }else if(password?.value !=rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }




  }


  handel():void{
   const admin=this.formgroup.value;
    
  if(this.formgroup.value==true){
    this._AuthComponent.register(admin).subscribe({
      next:(response)=>{console.log(response);
      }
    })
  }
    
    
    

  }


}
