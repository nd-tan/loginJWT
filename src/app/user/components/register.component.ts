import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './../templates/register.component.html',
})
export class RegisterComponent implements OnInit {
userForm! : FormGroup;
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
    let user: User = {
      email: data.email,
      password: data.password
    }
    this._UserService.store(user).subscribe(()=>{
      alert('đăng kí thành công');
      this._Router.navigate(['user/login']);
    })
  }

}
