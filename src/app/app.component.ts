import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Person } from './model/person';
import { Quoter } from './model/quoter';
import { Quote } from './model/quote';
import { QuoteDialogComponent } from './components/quote-dialog/quote-dialog.component';
import { QuoteService } from './services/quote.service';

export interface DialogData {
  quote: Quote;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'quotesc';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, private quoteService: QuoteService)  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
