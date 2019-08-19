import { Component, OnInit } from '@angular/core';
import { data } from './data/sample_data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assesment';  

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigateByUrl('/table');
  }
}
