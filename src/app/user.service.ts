import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject({
    email: '',
    token: '',
    id: '',
  });

  constructor(private http: HttpClient) {
    const user = window.localStorage.getItem('user');
    if (user) {
      this.user.next(JSON.parse(user));
    }
  }

  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users/login`, {
      user: {
        email,
        password,
      },
    });
  }

  logout() {
    window.localStorage.removeItem('user');
    this.user.next({ email: '', token: '', id: '' });
  }
}
