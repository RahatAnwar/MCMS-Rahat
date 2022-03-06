import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorUpdateComponent } from './components/author-update/author-update.component';
import {AddBookComponent} from "./components/Book/add-book/add-book.component";
import {UpdateBookComponent} from "./components/Book/update-book/update-book.component";
import {DeleteBookComponent} from "./components/Book/delete-book/delete-book.component";
//import { ListofBookComponent } from './components/Book/listof-book/listof-book.component';
import { AddBookshopComponent } from './components/BookShop/add-bookshop/add-bookshop.component';
import { UpdateBookshopComponent } from './components/BookShop/update-bookshop/update-bookshop.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {NgSelectModule} from "@ng-select/ng-select";
import {ListofBookComponent} from "./components/Book/listof-book/listof-book.component";
import { BookDetailsComponent } from './components/Book/book-details/book-details.component';
import { BookshopDetailsComponent } from './components/Bookshop/bookshop-details/bookshop-details.component';
import {ListofBookshopsComponent} from "./components/BookShop/listof-bookshop/listof-bookshop.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorListComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    AuthorUpdateComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    //ListofBookComponent,
    AddBookshopComponent,
    UpdateBookshopComponent,
    ListofBookshopsComponent,
    ListofBookComponent,
    BookDetailsComponent,
    BookshopDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
