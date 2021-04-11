import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel=Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.messages);
        localStorage.setItem("token",response.data.token);
      },responseError=>{

        this.toastrService.error(responseError.error)
      })

    }
  }

}


