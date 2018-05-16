import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public phnoneNumber: number;
  public fullName: string; country: string; mailId: string; navigationMenu: string;

  constructor() {
      this.phnoneNumber = 8374736430;
      this.fullName = 'Surya Teja Tanuku';
      this.country = 'India';
      this.mailId = 'suryatej.tanuku@gmail.com';
      this.navigationMenu = 'https://github.com/surya458';
   }

  ngOnInit() {
  }

}
