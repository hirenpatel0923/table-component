import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-lib-table',
  template: `

  <select (change)="onChange($event)">
    <option *ngFor="let num of numRows" [value]="num">{{num}}</option>
  </select>

  <div id="constrainer">
  <div class="scrolltable">
<table>
  <thead>

      <th *ngFor="let header of headers">
        {{header}}
      </th>

  </thead> </table>
  <div class="body">
  <table>
  <tbody>
        <tr *ngFor="let row of data">
          <td *ngFor="let key of headers"> 
            {{row[key]}}
          </td>
        </tr>
  </tbody>
</table>
</div>
</div>
</div>

<div class="pagination">
  <a>&laquo;</a>
  <a *ngFor="let page of Pages; let i=index;" [class.active]="currentPageIndex==(i + 1)" (click)="gotoPage(i+1);"> {{i + 1}} </a>
  <a>&raquo;</a>
</div>

  `,
  styles: [
    `
    table tr:nth-child(even) {
      background-color: #eee;
    }
    table tr:nth-child(odd) {
      background-color: #fff;
    }
    table th {
      color: white;
      background-color: black;
    }
    `,`
    #constrainer {       
      height: 100%;
      width: 100%; 
  }
  .scrolltable {
    overflow-x: scroll;
    height: 100%;   
}
.scrolltable > .body {
  width: -webkit-fit-content;
  overflow-y: scroll;
}
.scrolltable {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
} 
.scrolltable > .header { } 
.scrolltable > .body {    
  flex: 1;
  -webkit-flex: 1;
}
th, td {
  min-width: 150px;
  max-width: 150px; 
  word-break: break-word
} 
    `,
    `
    .pagination a {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
      transition: background-color .3s;
    }
    
    .pagination a.active {
      background-color: dodgerblue;
      color: white;
    }
    
    .pagination a:hover:not(.active) {background-color: #ddd;}
    `
  ],
})
export class LibTableComponent implements OnInit {

  headers;
  data;
  Pages: any[];
  numRows = [10,20,50];

  display_rows: number = 10;
  pageCount: number = 0;
  currentPageIndex: number = 1;
  startIndex: number = 0;
  endIndex: number = 0;


  @Input('data')
    all_data: any[];

  constructor() { }

  ngOnInit() {
    this.headers = Object.keys(this.all_data[0]);
    this.setPageCount();
    this.setPages();
    this.getPageData(this.currentPageIndex);
  }

  public onChange(event): void {  // event will give you full breif of action
    this.display_rows = event.target.value;
    this.setPageCount();
    this.setPages();
    this.getPageData(this.currentPageIndex);
  }

  getPageData(pagePndex) {
    if (pagePndex <= this.pageCount) {
      this.updateIndex(pagePndex);
      this.currentPageIndex = pagePndex;
      this.data = this.all_data.slice(this.startIndex, this.endIndex);
    }
  }

  gotoPage(index) {
    this.getPageData(index);
  }

  setPageCount() {
    if(this.all_data.length % 10 == 0) {
      this.pageCount = (this.all_data.length) / this.display_rows;
    }
    else {
      this.pageCount = (this.all_data.length/this.display_rows) + 1;
    }
  }

  updateIndex(pageIndex) {
    this.startIndex = (pageIndex - 1) * this.display_rows;
    this.endIndex = (pageIndex * this.display_rows) - 1;
  }

  setPages() {
    this.Pages = Array(this.pageCount);
  }

}
