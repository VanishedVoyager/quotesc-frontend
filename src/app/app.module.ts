import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExploreComponent } from './components/explore/explore.component';
import { MatCardModule } from '@angular/material/card';
import { QuoteService } from './services/quote.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { QuoteDialogComponent } from './components/quote-dialog/quote-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteListComponent,
    StatisticsComponent,
    ExploreComponent,
    QuoteDialogComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatGridListModule,
    GoogleChartsModule
  ],
  entryComponents: [QuoteDialogComponent],
  providers: [ QuoteService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
