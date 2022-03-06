import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../../models/bookShop";
import {BookShopServicesService} from "../../../services/book-shop.service";
import {Book} from "../../../models/book";
import {BookServicesService} from "../../../services/books.service";

@Component({
  selector: 'app-add-bookshop',
  templateUrl: './add-bookshop.component.html',
  styleUrls: ['./add-bookshop.component.css']
})
export class AddBookshopComponent implements OnInit {
  db_books:any;
  selected_books?:Book[];

  bookShop: BookShop = {
    Shop_name: '',
    Shop_number: '',
    location: '',
    books:[],
    contact_no: 0,
    email: '',


  }

  submitted = false;

  constructor(private bookShopService: BookShopServicesService, private bookService: BookServicesService) { }
  ngOnInit(): void {this.bookService.getAll()
    .subscribe({
      next:(data)=>{
        this.db_books= data;
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  saveBookShop(): void {
    const data = {

      shop_name: this.bookShop.Shop_name,
      shop_number: this.bookShop.Shop_number,
      location: this.bookShop.location,
      books: this.selected_books,
      contact_no: this.bookShop.contact_no,
      email: this.bookShop.email,
    };

    this.bookShopService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newBookShop():void {
    this.submitted = false;
    this.bookShop = {

      Shop_name: '',
      Shop_number: '',
      location: '',
      books: [],
      contact_no: 0,
      email: '',

    };
  }


}
