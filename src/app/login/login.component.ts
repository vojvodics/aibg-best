import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService
      .login(this.email, this.password)
      .subscribe((result: any) => {
        this.userService.user.next(result.user);
        window.localStorage.setItem('user', JSON.stringify(result.user));
        // console.log(this.userService.user.getValue());
        this.router.navigate(['dashboard']);
      });
  }
}
