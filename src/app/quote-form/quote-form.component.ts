import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Quote } from '../quote'; 
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","",new Date())
  constructor() { }

  ngOnInit(): void {
  }

}
