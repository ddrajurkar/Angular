import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  fname:string
  lname:string
  eml:string
  contactno:number
  dob:Date
  age:number
  occ:string
  org:string
  loc:string
  jrole:string
  adharid:number
  panid:number
  adrs:string
  city:string
  pin:number
  //photopath:string

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.fname}. My email is ${this.eml}. My Address is ${this.adrs}`;
    alert(allInfo); 
  }
}
