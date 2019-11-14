import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { QuoteService } from 'src/app/services/quote.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  text: string;
  quotedPersons: Person[];
  date: Date;
  braininess: number = 5;

  persons: Person[] = [
    {
      id: 1,
      firstName: 'Erik',
      lastName: 'Mayrhofer'
    },
    {
      id: 2,
      firstName: 'Jan',
      lastName: 'Neuburger'
    },
    {
      id: 3,
      firstName: 'Florian',
      lastName: 'Schwarcz'
    },
    {
      id: 4,
      firstName: 'Maximilian',
      lastName: 'Wahl'
    }
  ];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  saveQuote(){
    this.quoteService.addQuote({
      id: null,
      text: this.text,
      quotedPersons: this.quotedPersons,
      quoter: null
    });
  }

  cancel(){

  }

  onSliderChange(){

  }

}
