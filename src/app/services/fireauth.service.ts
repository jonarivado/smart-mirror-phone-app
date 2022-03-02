import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        localStorage.setItem('user', '');
      }
    });
  }

  async login() {    
    const user = await signInWithPopup(this.auth, new GoogleAuthProvider());
    localStorage.setItem('user', JSON.stringify(user.user));
  }
  
  async logout() {
    await this.auth.signOut();
  }
}
