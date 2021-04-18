import { Component, Input, OnInit } from '@angular/core';

import { projectcard} from '../project';
import {ProjectsComponent} from '../projects/projects.component'

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {
  @Input() img:string = "";
  @Input() text:string = "";
  @Input('projectobject') projectobject:any = {}
  @Input('id') id:number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.img, this.text)
  }

}
