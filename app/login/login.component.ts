import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;
  

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {  
     //validation of login button 
    this.authService.login(this.username, this.password);
   
    
  }
   ngOnInit(){
    this.authService.getloginResponse()
   } 

  showAlertMessage(): void {
    alert('You need to login first!');
  }
}