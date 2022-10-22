import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
user!: User
auth:any;
  constructor(
    private _UserService:UserService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.auth = this._UserService.checkAuth()
    if(!this.auth){
    this._Router.navigate(['user/login']);
    }
    this._UserService.profile().subscribe(user =>{
      this.user = user;
    })
  }
  logout(){
    this._UserService.logout();
    alert('đăng xuất thành công');
    this._Router.navigate(['user/login']);
  }


}
