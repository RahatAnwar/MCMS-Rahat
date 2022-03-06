import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookServicesService} from "../../../services/books.service";

@Component({
  selector: 'app-listof-book',
  templateUrl: './listof-book.component.html',
  styleUrls: ['./listof-book.component.css']
})
export class ListofBookComponent implements OnInit {
  books?: Book[];
  currentbook?: Book = {};
  currentIndex = -1
  title = ''
  dtOptions: DataTables.Settings = {};

  constructor(private BookService: BookServicesService) {
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.dtOptions = {
      processing: true,
      paging: true,
      pageLength: 5,
      responsive: true,
    };


  }

  getAllBooks(): void {
    this.BookService.getAll()
      .subscribe({
        next: (data) => {
          this.books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });


  }


  refreshList(): void {
    this.getAllBooks();
    this.currentbook = {};
    this.currentIndex = -1;
  }

  removeAllBooks(): void {
    if (confirm('Are you sure you want to delete all books')) {
      this.BookService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  }

  searchBookByTitle(): void {
    this.currentbook = {};
    this.currentIndex = -1;

    this.BookService.findBytitle(this.title)
      .subscribe({
        next: (data) => {
          this.books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}












