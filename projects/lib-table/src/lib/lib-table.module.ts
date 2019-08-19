import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTableComponent } from './lib-table.component';
import { TableDirective } from './table.directive';



@NgModule({
  declarations: [LibTableComponent, TableDirective],
  imports: [
    BrowserModule
  ],
  exports: [LibTableComponent]
})
export class LibTableModule { }
