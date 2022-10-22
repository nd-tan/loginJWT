import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './../templates/login.component.html',
})
export class LoginComponent implements OnInit {
  userForm! : FormGroup;
  response:any;
  constructor(
    private _UserService:UserService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'email' : new FormControl(''),
      'password': new FormControl('')
    })
  }
  onSubmit(){
    let data= this.userForm.value;
    let user:User = {
      email : data.email,
      password: data.password
    }
    this._UserService.login(data).subscribe(res=>{
      localStorage.setItem('access_token', res.access_token);
      alert('đăng nhập thành công');
      this._Router.navigate(['user/page']);
    });;

  }

}
