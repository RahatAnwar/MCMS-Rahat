import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {AddAuthorComponent} from "./components/add-author/add-author.component";
import {AddBookComponent} from "./components/Book/add-book/add-book.component";
import {AddBookshopComponent} from "./components/BookShop/add-bookshop/add-bookshop.component";
import {AuthorDetailsComponent} from "./components/author-details/author-details.component";
import {AuthorUpdateComponent} from "./components/author-update/author-update.component";
import {ListofBookComponent} from "./components/Book/listof-book/listof-book.component";
import {BookDetailsComponent} from "./components/Book/book-details/book-details.component";
import {UpdateBookComponent} from "./components/Book/update-book/update-book.component";
//import {ListofBookComponent} from "./components/Book/listof-book/listof-book.component";
//import {ListofBookshopComponent} from "./components/BookShop/listof-bookshop/listof-bookshop.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'author-details/:id', component: AuthorDetailsComponent},
  {path: 'update-author/:id', component: AuthorUpdateComponent},
  {path:'Book/add-book', component:AddBookComponent},
  {path:'BookShop/add-bookshop', component:AddBookshopComponent},
  {path: 'listof-book', component: ListofBookComponent},
  {path:'book-details/:id', component: BookDetailsComponent},
  {path:'update-book/:id', component:UpdateBookComponent},
  {path:'BookShop/listof-bookshop', component:ListofBookComponent},

  //{path:'Book/listof-book', component: ListofBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
