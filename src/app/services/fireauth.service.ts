import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        localStorage.setItem('user', '');
      } else if (localStorage.getItem('user') === '') {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.reload();
      }
    });
  }

  async login() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async logout() {
    await this.auth.signOut();
  }
}
