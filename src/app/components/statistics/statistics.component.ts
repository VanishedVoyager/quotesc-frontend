import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  title = 'Quotes per Person';
  data = [
    ['Jan Neuburger', 45.0],
    ['Erik Mayhofer', 26.8],
    ['Maximilian Schuster', 12.8],
    ['Florian Schwarzc', 8.5],
    ['Maximilian Wahl', 6.2],
    ['Joules Zapata', 0.7]
    ];
  type = 'PieChart';
  columnNames = ['Person', 'Percentage'];
  options = {
    is3D: false
  };

  constructor() { }

  ngOnInit() {
  }

}
