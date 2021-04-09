import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {
  @Input() img:string = "";
  @Input() text:string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.img, this.text)
  }

}
