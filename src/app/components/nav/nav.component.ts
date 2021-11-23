import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/Category';
import { Transaction } from 'src/app/Transaction';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  select:boolean= true;
  @Output() selectEvent= new EventEmitter<boolean>();

  

  @Input() checkedTransactions: Transaction[];

  @Input() categories: Category[];

  updatedTransactions: Transaction[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  setCheckBox(){
    this.select=!this.select;
    this.sendSelect();
  }

  sendSelect(){
    this.selectEvent.emit(this.select);
  }

  openDialog(){
    const dialogRef= this.dialog.open(ModalComponent, {
      width: '260px',
      data:{transactions:this.checkedTransactions,
            categories: this.categories}
    });
    
    dialogRef.afterClosed().subscribe(result=>{
      
      this.updatedTransactions=result;
      console.log(this.updatedTransactions);
    })
    
  }

}
