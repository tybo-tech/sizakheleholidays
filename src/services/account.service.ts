import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private _user: BehaviorSubject<User | undefined>;
  public user: Observable<User | undefined>;
  private _loading: BehaviorSubject<boolean>;
  public loading: Observable<boolean>;
  url: string;
  hidePassword = true;
  constructor(
    private http: HttpClient,
    private router: Router) {
    const user = localStorage.getItem('user');
    if (user) {
      this._user = new BehaviorSubject<User | undefined>(JSON.parse(user) || undefined);
    } else {
      this._user = new BehaviorSubject<User | undefined>(undefined);
    }
    this._loading = new BehaviorSubject<boolean>(false);
    this.user = this._user.asObservable();
    this.loading = this._loading.asObservable();
    this.url = environment.API_URL;
  }

  public get currentUserValue(): User | undefined {
    return this._user.value;
  }

  updateUserState(user?: User) {
    this._user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }


  login(credentials: { email: any; password: any; }): Observable<User> {
    return this.http.post<any>(`${this.url}/api/account/login.php`, credentials);
  }


  logout() {
    this._user.next(undefined);
    localStorage.clear();
    this.router.navigate(['']);
  }
}
