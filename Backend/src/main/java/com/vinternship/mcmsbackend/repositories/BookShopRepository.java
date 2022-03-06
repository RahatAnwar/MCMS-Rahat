package com.vinternship.mcmsbackend.repositories;

import com.vinternship.mcmsbackend.models.BookShop;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookShopRepository extends MongoRepository<BookShop, String>{

}
