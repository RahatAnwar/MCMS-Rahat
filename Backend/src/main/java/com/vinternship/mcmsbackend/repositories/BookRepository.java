package com.vinternship.mcmsbackend.repositories;

import com.vinternship.mcmsbackend.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository<Book, String >  {
    //List<Book> findBookByName(String id);
   // List<Book> findBookByTitle(String title)
}
