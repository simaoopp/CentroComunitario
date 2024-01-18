import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  constructor(
    private auth: Auth,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        this.storeToken(token);
      } else {
        this.clearToken();
      }
    });
  }

  storeToken(token: string): void {
    sessionStorage.setItem('authToken', token);
  }
  
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  
  clearToken(): void {
    sessionStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.token != null;
  }

  login(username: string, password: string): Observable<void> {
    return from(
      signInWithEmailAndPassword(this.auth, username, password)
        .then(async (userCredential) => {
          const token = await userCredential.user.getIdToken();
          this.storeToken(token);
          this.toastr.success('Inicio de sessão feito com sucesso', 'Bem-Vindo!');
        })
        .catch((error) => {
          this.toastr.error('Tente novamente ou chame o administrador', 'Falha no ao tentar iniciar sessão');
          throw error;
        })
    );
  }

  async logout() {
    await this.auth.signOut();
    this.clearToken();
    this.router.navigate(['/']);
  }
}