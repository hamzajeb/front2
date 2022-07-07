import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from './../employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    'username' : new FormControl(null),
    'password': new FormControl(null)
  })

  constructor(private employeeService:EmployeeService) {
    localStorage.clear();
   }
  hide = true;
  message:any;
  responseData:any;
  ngOnInit(): void {
  }
  loginFormData(){
    if(this.login.valid){
      
      this.employeeService.getLogin(this.login.value).subscribe(result=>{
        console.log("hhhh")
        this.responseData=result;
        if(this.responseData.token!=null){
          
          localStorage.setItem('Token',this.responseData.token);
          
          }else{
            this.message=this.responseData.message;
          }
          
      })
    }
    }
  }


