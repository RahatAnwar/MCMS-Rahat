import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {AuthorListComponent} from './components/author-list/author-list.component';
import {AddAuthorComponent} from './components/add-author/add-author.component';
import {AuthorDetailsComponent} from './components/author-details/author-details.component';
import {AuthorUpdateComponent} from './components/author-update/author-update.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {NgSelectModule} from "@ng-select/ng-select";
import { AddBookComponent } from './componets/Book/add-book/add-book.component';
import { UpdateBookComponent } from './components/Book/update-book/update-book.component';
import { DeleteBookComponent } from './components/Book/delete-book/delete-book.component';
import { ListofBooksComponent } from './components/Book/listof-books/listof-books.component';
import { UpdateBookshopComponent } from './components/Bookshop/update-bookshop/update-bookshop.component';
import { DeleteBookshopComponent } from './components/Bookshop/delete-bookshop/delete-bookshop.component';
import { ListofBookshopComponent } from './components/Bookshop/listof-bookshop/listof-bookshop.component';
import { AddBookshopComponent } from './components/Bookshop/add-bookshop/add-bookshop.component';
import { AddmultiplebookBooksshopComponent } from './components/Bookshop/addmultiplebook-booksshop/addmultiplebook-booksshop.component';

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
    ListofBooksComponent,
    UpdateBookshopComponent,
    DeleteBookshopComponent,
    ListofBookshopComponent,
    AddBookshopComponent,
    AddmultiplebookBooksshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
