import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(private http:HttpClient, private router:Router) { }
  ngOnInit(): void {
   this.registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
   })

   this.registerForm.controls['confirmPassword'].valueChanges.subscribe(value => {
    const password = this.registerForm?.get('password')?.value;
    if (password !== value) {
      this.registerForm.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      this.registerForm.get('confirmPassword')?.setErrors(null);
    }
   });

  }

  registerForm!:FormGroup

  onSubmit(){
    this.http
      .post('http://localhost:5000/api/user/create', {
        name: this.registerForm.get('name')?.value,
        username: this.registerForm.get('username')?.value,
        email: this.registerForm.get('email')?.value,
        phone: this.registerForm.get('phone')?.value,
        password: this.registerForm.get('password')?.value,
        profileImage: this.registerForm.get('profileImage')?.value,
      })
      .subscribe((res:any) => {
        if(res.statusCode === 200){
          console.log(res.message);
          this.router.navigate(['/login']);
        }
      });
  }

}
