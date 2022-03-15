import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
/* import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component'; */

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    TableComponent,
    MatTableModule,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
