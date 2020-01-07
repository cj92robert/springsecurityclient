import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DtoUser} from '../models/dtoUser';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  apiUrl: string = 'http://localhost:83/';


  constructor(private http: HttpClient) {
  }


  public login(username: string, password: string) {
    const auth = 'Basic ' + btoa(username + ':' + password);
    const httpHeaders = new HttpHeaders()
      .set('Authorization', auth);
    return this.http.get(this.apiUrl + 'auth', {headers: httpHeaders, responseType: 'text'});
  }

  public register(user: DtoUser): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'auth/register', user);
  }

  public getLogged(): Observable<User> {
    return this.http.get<User>(this.apiUrl + 'auth/islogin');
  }

}
