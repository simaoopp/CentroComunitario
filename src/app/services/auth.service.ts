import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.auth.onAuthStateChanged((user) => {
      this.setLoggedIn(!!user);
    });
  }

  setLoggedIn(value: boolean): void {
    localStorage.setItem('isLoggedIn', String(value));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string) {
    return from(
      signInWithEmailAndPassword(this.auth, username, password)
        .then((value) => {
          this.toastr.success(
            'Inicio de sessão feito com sucesso',
            'Bem-Vindo!'
          );
          this.setLoggedIn(true);
        })
        .catch((error) => {
          this.toastr.error(
            'Tente novamente ou chame o administrador',
            'Falha no ao tentar iniciar sessão'
          );
        })
    );
  }

  async logout() {
    await this.auth.signOut();
    this.setLoggedIn(false);
    this.router.navigate(['/']);
  }
}
