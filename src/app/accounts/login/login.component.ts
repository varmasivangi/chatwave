import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService, ApiAccountLoginPostRequest } from '../../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor( private accountService:AccountService,private router:Router) {

   
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  loginPage(){

const loginData:ApiAccountLoginPostRequest = {
  email: this.loginForm.get('userName')?.value,
  password: this.loginForm.get('password')?.value
}

    this.accountService.apiAccountLoginPost(loginData).subscribe((res:any)=>{

      if(res.statuscode === 200){
        console.log(res);
        this.router.navigate(['/dashboard']);
      }

    })

    

  }
allowOnlyNumber(event:KeyboardEvent){

   const char = event.key;

  if (/^[A-Za-z]$/.test(char)) {
    event.preventDefault();
  }

}
  
}
