import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  login(data: any): Observable<any> {
    console.log('API call', data);

    // simulate API
    return of({
      token: 'dummy-token',
      user: { email: data.email, role: 'member' }
    });
  }

  setUser(user: User) {
    this.userSubject.next(user);
  }
}