import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {DtoUser} from '../../models/dtoUser';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {Role, User} from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit {
  registerUser = new DtoUser('', '', '', '', '');
  currentUser: User = new User();
  isAdmin = false;
  logged = false;
  errorlog = false;
  isMenuCollapsed = true;
  isLoginCollapsed = true;
  isRegisterCollapsed = true;
  password1 = '';
  username1 = '';
  confirmPassword = '';
  divider: boolean;
  token = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {


    this.getLoggedUser();

  }


  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(res => {
      this.errorlog = false;
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('token', res);
      this.getLoggedUser();
      this.messageService.add({severity: 'success', summary: 'Powodzenie', detail: 'Udało się zalogować'});
      this.router.navigate(['/start']);

    }, error => {
      this.logged = false;
      this.errorlog = true;
      this.messageService.add({severity: 'error', summary: 'Bład', detail: 'Nie udało się zalogować. '});
    });
  }

  logout() {
    sessionStorage.clear();
    this.logged = false;
    this.password1 = '';
    this.currentUser = null;
    this.isAdmin = false;
    this.messageService.add({severity: 'success', summary: 'Komunikat', detail: 'Wylogowano'});
    this.router.navigate(['/index.html']);
  }

  registerNewUser(user: DtoUser) {
    this.isRegisterCollapsed = false;

    this.userService.register(user).subscribe(res => {
        console.log('powodzenie');
        this.isRegisterCollapsed = !this.isRegisterCollapsed;
        this.messageService.add({severity: 'success', summary: 'Komunikat', detail: 'Zarejstrowano nowego użytkownika!!'});
      }, error => {
        console.log('blad');
        this.messageService.add({severity: 'error', summary: 'Bład', detail: 'Dane do rejstracji nie poprawne'});
      }
    );
  }

  getLoggedUser() {
    this.userService.getLogged().subscribe(res => {
      this.logged = res.enabled;
      this.currentUser = res;
      this.isAdminCheck();
    }, error => {
      sessionStorage.clear();
      this.currentUser = null;
    });
  }

  isAdminCheck() {
    if (this.currentUser) {
      this.isAdmin = this.currentUser.roles.map(x => x.name).includes('ROLE_ADMIN');
    } else {
      this.isAdmin = false;
    }
  }


}
