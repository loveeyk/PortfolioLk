import { Component, OnInit, Input } from '@angular/core';
import {projectcard} from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [...projectcard]
  heading = "My recent projects"

  constructor() { }

  ngOnInit(): void {
  }

}
