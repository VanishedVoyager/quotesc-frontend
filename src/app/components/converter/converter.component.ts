import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';
import { Quoter } from 'src/app/model/quoter';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  files: FileList = null;
  output: string = '';

  constructor() { }

  ngOnInit() {
  }

  fileChanged(files: FileList){
    this.files = files;
  }

  convert(){
    for (let index = 0; index < this.files.length; index++) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.output += fileReader.result.toString()+'\n';
      };
      fileReader.readAsText(this.files.item(index));
    }
    let lines = this.output.split('\n');
    let quotes: Quote[];
    lines.forEach(line => {
      let fields = line.split(';');
      let personText = fields[1].split(',');
      let persons: Person[];
      personText.forEach(e => {
        persons.push({
          id: 0,
          firstName: e,
          lastName: ''
        });
      });
      let quoterMock: Quoter = {
        id: 0,
        sub: 'quoter'
      };
      quotes.push({
        id: 0,
        text: fields[0],
        quoter: quoterMock,
        quotedPersons: persons
      });
    });
    console.log(quotes);
  }

}
