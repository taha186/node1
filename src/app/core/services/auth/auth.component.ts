import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClient, HttpClientModule}from'@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private _HttpClient:HttpClient){}
  register(userdata:object) :Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userdata)
    
  }

}
