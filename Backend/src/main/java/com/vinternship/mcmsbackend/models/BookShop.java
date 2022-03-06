package com.vinternship.mcmsbackend.models;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Year;
import java.util.Date;
import java.util.List;
public class BookShop {

    @Id
    private String Shop_name;
    private String Shop_number;
    private String location;
    private Book[] books;
    private int contract_no;
    private String email;

    @CreatedDate
    private Date date;
    public BookShop() {}

    public BookShop(String Shop_name, String Shop_number,String location,Book[] books,int contract_no,String email,Date date) {
        this.Shop_name = Shop_name;
        this.Shop_number= Shop_number;
        this.location= location;
        this.books = books;
        this.contract_no= contract_no;
        this.email= email;
        this.date= date;
    }

    public String getShop_name() {
        return Shop_name;
    }

    public void setShop_name(String shop_name) {
        Shop_name = shop_name;
    }

    public String getShop_number() {
        return Shop_number;
    }

    public void setShop_number(String shop_number) {
        Shop_number = shop_number;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Book[] getBooks() {
        return books;
    }

    public void setBooks(Book[] books) {
        this.books = books;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getContract_no() {
        return contract_no;
    }

    public void setContract_no(int contract_no) {
        this.contract_no = contract_no;
    }

   public Date getDate() {
        return date;
    }
}