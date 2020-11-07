import { Component, OnInit,} from '@angular/core';
import { Quote }from  '../quote'; 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Push yourself beacause no one is going to fo it for you', 'By Laurine Praise'),
    new Quote(2, 'The harder you work on something, the greater you will feel when you achive it', 'By John Campbell'),
    new Quote(3, 'The way to get started is to quit talking and begin doing', 'By Walt Disney'),
    new Quote(4, 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You', 'By Steve Jobs'),
    new Quote(5, 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough', 'By Og Mandino')

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
