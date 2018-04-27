import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-same-folder-comp',
  template: `
    Password : <input [type]="p">
    `,
  styles: []
})
export class SameFolderCompComponent implements OnInit {
  p = "button"
  
   constructor() { }
  ngOnInit() {
  }

}
