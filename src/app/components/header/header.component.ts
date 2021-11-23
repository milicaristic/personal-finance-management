import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() currency: string;
@Input() sum:number;
filter:string="all";
@Output() filterToSend= new EventEmitter<string>();

  title: String= 'Personal Finance Management'
  constructor() { }

  ngOnInit(): void {
  }

  changeFilter(filter: string){
    this.filter=filter;
    this.sendFilter();
  }

  sendFilter(){
    this.filterToSend.emit(this.filter);
  }

}


