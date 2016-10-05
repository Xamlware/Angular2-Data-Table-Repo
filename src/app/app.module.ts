import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Angular2DataTableModule } from 'angular2-data-table';


@NgModule({
    imports: [ BrowserModule, Angular2DataTableModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [  ]

}) 

export class AppModule {} 