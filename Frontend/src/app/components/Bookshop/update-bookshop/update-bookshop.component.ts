import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../../models/bookShop";
import {ActivatedRoute, Params} from "@angular/router";
import {BookServicesService} from "../../../services/books.service";
import {BookShopServicesService} from "../../../services/book-shop.service";

@Component({
  selector: 'app-update-book-shop',
  templateUrl: './update-bookshop.component.html',
  styleUrls: ['./update-bookshop.component.css']
})
export class UpdateBookshopComponent implements OnInit {
  selected_book:any;
  books:any;

  id?:string;
  bookShop = new BookShop();
  submitted = false;

  constructor(private bookShopService:BookShopServicesService,
              private route:ActivatedRoute,private bookService:BookServicesService
  ) { }

  ngOnInit(): void {
    this.bookShop = new BookShop();

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = params['id'.toString()];
        this.bookShopService.get(this.id)
          .subscribe({
            next:(data)=>{
              this.bookShop = data;
              this.selected_book = this.bookShop.books;
            },

            error:(err)=>{
              console.log(err);
            }
          });

      }

    );

    this.bookService.getAll()
      .subscribe({
        next:(data)=>{
          this.books = data;
        },
        error:(err)=>{
          console.log(err);
        }
      });
  }

  updateBookShop():void {
    if(confirm('update this book shop?')){
      const data = {
        shop_name: this.bookShop.Shop_name,
        shop_number: this.bookShop.Shop_number,
        location: this.bookShop.location,
        book: this.selected_book,
        contact_no: this.bookShop.contact_no,
        email: this.bookShop.email,

      }

      this.bookShopService.update(this.id, data)
        .subscribe({
          next:(data)=>{
            console.log(data);
            this.submitted = true;
          },
          error:(err)=>{
            console.log(err);

          },

        });


    }
  }

}
