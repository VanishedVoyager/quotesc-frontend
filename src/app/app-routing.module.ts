import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ConverterComponent } from './components/converter/converter.component';
import { QuoteDialogComponent } from './components/quote-dialog/quote-dialog.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quote_list',
    component: QuoteListComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'converter',
    component: ConverterComponent
  },
  {
    path: 'add',
    component: AddQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
