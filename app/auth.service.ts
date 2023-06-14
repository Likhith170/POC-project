import { Injectable } from '@angular/core';
import { ApiService } from './service/api.service'; //authentication of user
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private readonly validUsername = 'admin';
  private readonly validPassword = 'password';
  errorMessage: any;
  getloginres:any;
  
  
  constructor(private apiservice: ApiService, private router: Router){}

  login(username: string, password: string){
  
   //this.getloginres?.forEach(res=>{//
    var test= this.getloginres.some(function(item) {
      return item.Username === username && item.Password === password;
    });
    
    if (test)
    {
      this.router.navigateByUrl('/home');
      this.loggedIn = true;
      sessionStorage.setItem('encryptedPwd',btoa(password));
      console.log(atob('cGFzc3dvcmQ='));
      console.log(atob('cGFzczEyMw=='));
      console.log(atob('MTIzNA=='));
      
      
    } else {this.errorMessage = 'Invalid username or password. Please try again.';
    alert(this.errorMessage);
    }
   
  
  }
  getloginResponse(){
    this.apiservice.getloginUsers().subscribe(res=>{console.log(res)
      this.getloginres=res
    })
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}