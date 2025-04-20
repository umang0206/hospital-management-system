import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string="";
  password:string="";
  constructor(private loginService:LoginserviceService, private router:Router){}
  checkLogin(){
    if(this.username=="" && this.password== "") {
      alert("Please Enter Username and Password")
    }
    else if(this.username=="") {
      alert("Please Enter Username")
    }
    else if(this.password== ""){
      alert("Please Enter Password")
    }

    this.loginService.authenticate(this.username,this.password).subscribe(res =>{
      if(res.success){

        if (res.userType === 'Doctor') {
          sessionStorage.setItem('doctoruser',this.username)
          this.router.navigate(['/docdash']);
        }
        else if (res.userType === "Admin") {
          sessionStorage.setItem('adminuser',this.username)
          this.router.navigate(['admin'])
        }
        else{
          alert("Unknown Error")
          this.router.navigate(['/home']);
        }
      }
      else{
        alert("Invalid username or password");
        this.router.navigate(['login']);
      }
    })
  }
}
