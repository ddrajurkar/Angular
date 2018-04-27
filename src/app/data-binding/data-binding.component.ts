import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  typ = 'text'
  p = 'password'
  status = 'High Profile Status'


  constructor() { }

  ngOnInit() {
  }

  click()
  {
    alert('You are in angular zone!!')
  }

}
