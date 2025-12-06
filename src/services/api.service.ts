import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }


login(username: string, password: string) {
  return this.http.post(
    'http://localhost:5000/api/account/login',
    { username, password },
  
  );
}


  register(userData: any) {
    return this.http.post('http://localhost:5000/api/user/create', userData);
  }
}
