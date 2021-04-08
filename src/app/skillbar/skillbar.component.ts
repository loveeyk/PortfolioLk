import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillbar',
  templateUrl: './skillbar.component.html',
  styleUrls: ['./skillbar.component.css']
})

export class SkillbarComponent implements OnInit {

  @Input() tagstring:String = ""
  @Input() level:string = "";
  @Input() image?:string = "";
  @Input() color:string ="";

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.tagstring, this.level)
  }

}
