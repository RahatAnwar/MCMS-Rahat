package com.vinternship.mcmsbackend.controllers;

import com.vinternship.mcmsbackend.models.Book;
import com.vinternship.mcmsbackend.models.BookShop;
import com.vinternship.mcmsbackend.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BookController {
    @Autowired
    BookRepository BookRepository;

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBook(@RequestParam(required = false) String name) {
        try {
            List<Book> books = new ArrayList<Book>();

            if (name == null) {
                BookRepository.findAll().forEach(books::add);
            }


            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") String id) {
        Optional<Book> bookData = BookRepository.findById(id);

        if (bookData.isPresent()) {
            return new ResponseEntity<>(bookData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/books")
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        try {
            Book _b = BookRepository.save(new Book(
                    book.getId(),
                    book.getTitle(),
                    book.getPrice(),
                    book.getYear_of_publishing(),
                    book.getAuthor(),
                    book.getGenre(),
                    book.getPublisher()
            ));
            return new ResponseEntity<>(_b, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") String id, @RequestBody Book book) {
        Optional<Book> BookData = BookRepository.findById(id);

        if (BookData.isPresent()) {
            Book _b= BookData.get();
            _b.setTitle(book.getTitle());
            _b.setPrice(book.getPrice());
            _b.setAuthor(book.getAuthor());
            _b.setGenre(book.getGenre());
            _b.setPublisher(book.getPublisher());
            _b.setYear_of_publishing(book.getYear_of_publishing());



            return new ResponseEntity<>(BookRepository.save(_b), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") String id) {
        try {
            BookRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/books")
    public ResponseEntity<HttpStatus> deleteAllBook() {
        try {
            BookRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/books/title/{title}")
//    public ResponseEntity<List<Book>> findByTitle(@PathVariable("title") String title) {
//        try {
//            List<Book> b2 = BookRepository.findBookByTitle(title);
//            if (b2.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(b2, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
    }
//}
