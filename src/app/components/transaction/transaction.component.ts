import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
import { Category } from 'src/app/Category';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transaction!: Transaction;
  @Input() categories: Category[];
  @Input() filter: string;
  @Input() checkbox:boolean;
  @Output() onCheckedEvent: EventEmitter<Transaction>= new EventEmitter();

  check:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(transaction){
   this.onCheckedEvent.emit(this.transaction);
  }

  checked(){
    this.transaction.isselected=!this.transaction.isselected;
    this.onChecked(this.transaction);
  }

}
