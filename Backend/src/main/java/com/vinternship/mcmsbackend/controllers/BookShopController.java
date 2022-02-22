package com.vinternship.mcmsbackend.controllers;


import com.vinternship.mcmsbackend.repositories.BookShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.vinternship.mcmsbackend.models.BookShop;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class BookShopController {

    @Autowired
    BookShopRepository bookShopRepository;

    @PostMapping ("/bookshops")
    public ResponseEntity<BookShop> createBookShop(@RequestBody BookShop bookshop) {
        try {
            BookShop _b = bookShopRepository.save(new BookShop(
                    bookshop.getShop_name(),
                    bookshop.getShop_number(),
                    bookshop.getLocation(),
                    bookshop.getBooks(),
                    bookshop.getContract_no(),
                    bookshop.getEmail(),
                    bookshop.getDate()
            ));

            return new ResponseEntity<>(_b, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

}
