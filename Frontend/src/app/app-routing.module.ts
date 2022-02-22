import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {AddAuthorComponent} from "./components/add-author/add-author.component";
import {AddBookComponent} from "./components/Book/add-book/add-book.component";
import {AddBookshopComponent} from "./components/BookShop/add-bookshop/add-bookshop.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path:'Book/add-book', component:AddBookComponent},
  {path:'BookShop/add-bookshop', component:AddBookshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
