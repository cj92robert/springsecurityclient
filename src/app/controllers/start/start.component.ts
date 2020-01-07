import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('username') == null) {
      this.router.navigate(['/index.html']);
    }
  }

}
