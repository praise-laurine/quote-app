import { Component, OnInit,} from '@angular/core';
import { Quote }from  '../quote'; 
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Push yourself beacause no one is going to fo it for you', 'By Laurine Praise',new Date(2020,3,14)),
    new Quote(2, 'The harder you work on something, the greater you will feel when you achive it', 'By John Campbell',new Date(2020,6,9)),
    new Quote(3, 'The way to get started is to quit talking and begin doing', 'By Walt Disney',new Date(2020,0,12)),
    new Quote(4, 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You', 'By Steve Jobs',new Date(2019,6,18)),
    new Quote(5, 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough', 'By Og Mandino',new Date(2019,3,14))

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      // this.quotes.splice(index,1);
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
    
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
