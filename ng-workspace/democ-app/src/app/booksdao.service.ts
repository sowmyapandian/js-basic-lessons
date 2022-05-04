import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksdaoService {
  booklist = [
    {
      name: 'The Three Zeros',
      price: 270,
      author: 'Muhammed Yunus',
      canBuy: true,
      images: [{ thumb: 'images/WorldofThreeZeros.png', full: '' }],
      description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
      publishdate:Date.now(),
      discount: 0.1
    },
    {
      name: 'Zero to One',
      price: 320,
      author: 'Peter Thial',
      canBuy: false,
      images: [{ thumb: 'images/ZeroToOne.png', full: '' }],
      publishdate:Date.now(),
      discount: 0.2,
      description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters'
    },
  ];


  constructor() { }
  getBooks() {
    return this.booklist;
  }
  addBook(book:any) {
     console.log('new book added' + book.name + ' ' + book.author);
     console.log('No of books' + this.booklist.length);
     this.booklist.push(book);
     console.log('No of books :' + this.booklist.length);
  }
  updateBook(book:any) {
     console.log('new book modified' + book.name + ' ' + book.author);
      
  }

}
