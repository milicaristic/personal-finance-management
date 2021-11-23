import { SummaryResolver } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/Transaction';
import { Category } from 'src/app/Category';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  categories: Category[]=[];
  transactions: Transaction[]= [];
  checkedTransactions: Transaction[]=[];
  sum: number=0;
  currency:string;
  filter:string="all";
  checkbox:boolean=true;


  

  constructor(private transactionService: TransactionService ) { }

  ngOnInit(): void {

    this.transactionService.getCategories().subscribe((categories) =>
    {
      this.categories=categories;
    });

    this.transactionService.getTransactions().subscribe((transactions) =>
    
    {
      this.transactions= transactions;
      this.currency= transactions[0].currency;
      this.sumAll();
      this.sort();  
      
    });
    
  }

  sort(){
    this.transactions.sort(this.byDate);
  }

  byDate(a: Transaction,b: Transaction) {
    if(a.date>b.date){
      return 1;
    }
    else if(b.date > a.date){
      return -1;
    }
    else{
      return 0;
    }
  }

  roundTo(num: number, places: number) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }

  //parseFloat(x)

  sumAll(){
    for (var trans of this.transactions) {
      let x= trans.amount;
      if(trans.direction=="d"){
        this.sum=Math.round((this.sum+x)*1000)/1000 ;
      }
      else{
        this.sum=Math.round((this.sum-x)*1000)/1000 ;
      }
      
    }
    console.log(this.sum);
  }
//addbev


  receiveFilter($event){
    this.filter=$event;


  }

  receiveCheckbox($event){
    this.checkbox= $event;
  }

  onChecked($event){
    this.checkedTransactions.push($event);
    console.log(this.checkedTransactions);
  }

  

  
}
