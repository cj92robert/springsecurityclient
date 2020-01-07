import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MessageService]
})
export class AdminComponent implements OnInit {
  users: User[];
  currentPage: number = 0;
  size: number = 0;

  constructor(private userService: UserService, private messageService: MessageService) {

  }


  ngOnInit() {
    this.refreshData();
  }

  paginate(event) {
    this.currentPage = event.page;
    this.userService.getAllUsers(this.currentPage).subscribe(res => {
      this.users = res.content;
      this.size = res.totalElements;

    });
  }

  delete(user: User) {
    this.userService.deleteUser(user.id).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Komunikat', detail: 'Skasowano'});
      this.refreshData();
    }, error => {
      this.messageService.add({severity: 'wrong', summary: 'Komunikat', detail: 'Niepowodzenie'});
      this.refreshData();
    });
  }

  refreshData() {
    this.userService.getAllUsers(this.currentPage).subscribe(res => {
      this.users = res.content;
      this.size = res.totalElements;

    });
  }
}
