import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookServicesService} from "../../../services/books.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id?: string;
  book = new Book();

  constructor(private route: ActivatedRoute,
              private router:Router,
              private bookService: BookServicesService) { }

  ngOnInit(): void {this.book = new Book();
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = params['id'.toString()];
        this.bookService.get(this.id)
          .subscribe({
            next:(data)=>{
              this.book = data;
              console.log(data);
            },
            error:(e)=>console.error(e)
          });
      }
    );

  }
  deleteBook(id: string){
    if(confirm("Delete Book?")){
      this.bookService.delete(id)
        .subscribe({
          next:(data)=>{
            this.book = data;
            console.log(data);
          },
          error:(e)=>console.error(e)
        });
      this.router.navigate(['/book-list']).then(()=>{

      });
    }
  }
  updateBook(id: string){
    this.router.navigate(['/update-book', id]).then(()=>{

    });
  }

 }




