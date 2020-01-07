import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpResponse} from '@angular/common/http';
import {User} from '../../models/user';
import {HttpIntercepterService} from '../../services/http-intercepter.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }


}
