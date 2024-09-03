import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'user';

  signup(user: { name: string; email: string; password: string }) {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(
      localStorage.getItem(this.storageKey) || '{}'
    );
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserName(): string | null {
    const storedUser = JSON.parse(
      localStorage.getItem(this.storageKey) || '{}'
    );
    console.log(storedUser);
    console.log(storedUser.firstName);
    return storedUser.firstName || null;
  }
}
