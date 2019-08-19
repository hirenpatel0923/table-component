import { Component, OnInit } from '@angular/core';
import { data } from '../../data/sample_data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: any[];
  headers;

  constructor() { }

  ngOnInit() {
    this.data = data;
    this.headers = Object.keys(this.data[0]);
  }

}
