import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ccData]',
})
export class TableDirective {

  data: any[];
  headers;

  @Input('ccData') set ccData(data: any[]) {
    this.data = data;
    this.headers = this.data.keys();
    console.log(this.headers);
    console.log(this.data);
  }

  constructor() { }

}
