import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {id:1,quoteName:'Push yourself beacause no one is going to fo it for you'},
    {id:2,quoteName:'The harder you work on something, the greater you will feel when you achive it'},
    {id:3,quoteName:'The way to get started is to quit talking and begin doing'},
    {id:4,quoteName:'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You'},
    {id:5,quoteName:'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough'}
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
