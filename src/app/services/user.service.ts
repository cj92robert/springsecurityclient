import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {DtoUser} from '../models/dtoUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  public getAllUsers(page = 0): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'user?size=5&page=' + page);
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiUrl + 'user/' + id);
  }
}
