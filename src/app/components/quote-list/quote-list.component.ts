import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  testQuote: Quote = {
    id: 1,
      text: 'Yoink',
      quotedPersons: [{
        id: 1,
        firstName: 'Yeety',
        lastName: 'McYoink'
      }],
      quoter: {
        id: 1,
        sub: 'quoter'
      },
      date: new Date('01.01.1970')
  };
  quotes: Quote[] = [];
  noError = true;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.loadQuotes();
  }

  loadQuotes(){
    if(this.quotes.length == 0){
      console.log('Im Here');
      for (let index = 1; index < 21; index++) {
        this.testQuote.id = index;
        this.quotes.push(this.testQuote);
      }
    }
    this.quoteService.getQuotes().subscribe((data) => {
      this.quotes = data;
      this.noError = true;
    }, (error) =>{
      console.log(error);
      //this.noError = false;
    });
  }

}
