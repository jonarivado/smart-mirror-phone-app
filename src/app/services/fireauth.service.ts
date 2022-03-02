import { Injectable } from '@angular/core';
import {
  Auth,
<<<<<<< HEAD
  signInWithPopup,
  GoogleAuthProvider,
=======
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
>>>>>>> detached
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
<<<<<<< HEAD
    const user = await signInWithPopup(this.auth, new GoogleAuthProvider());
    localStorage.setItem('user', JSON.stringify(user.user));
=======
    signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  async storeUser() {
    const result = await getRedirectResult(this.auth)
    
    if (result) {
      localStorage.setItem('user', JSON.stringify(result.user));
    }
>>>>>>> detached
  }
  
  async logout() {
    await this.auth.signOut();
  }
}
