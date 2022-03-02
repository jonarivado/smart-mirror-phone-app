import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithRedirect,
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
      }
    });
  }

  async login() {    
    signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  async storeUser() {
    const result = await getRedirectResult(this.auth)
    
    if (result) {
      localStorage.setItem('user', JSON.stringify(result.user));
    }
  }
  
  async logout() {
    await this.auth.signOut();
  }
}
