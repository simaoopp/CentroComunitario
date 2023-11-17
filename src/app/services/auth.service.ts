import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: any;

  constructor(private auth: Auth) { }

  login(username: string, password: string) {
    return from(
      signInWithEmailAndPassword(this.auth, username, password).then(
        (value) => {
          this.isLoggedIn = true;
        }
      )
    );
  }
}
