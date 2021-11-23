import { Component, Input, OnInit ,Inject, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Transaction } from 'src/app/Transaction';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/Category';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {



  selectedCategory: Category;
  //updated transactions
  transactions: Transaction[]= this.data.transaction;
  @Output() changedTransactions: EventEmitter<Transaction[]>=new EventEmitter();

  constructor( public dialogRef:MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {

   }



  ngOnInit(): void {
  }

  log(){
    console.log(this.transactions);
  }
  onClick(){
    
    console.log(this.data.transactions);
    for (let i = 0; i < this.data.transactions.length; i++) {
        this.data.transactions[i].category= this.selectedCategory;
    }
    
    this.dialogRef.close({result:this.data.transactions});

  }

  onChangedTransactions(){
    this.changedTransactions.emit(this.data.transactions);
  }


}
