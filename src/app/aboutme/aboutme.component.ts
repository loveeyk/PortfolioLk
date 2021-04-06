import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  heading = "Loveleen Karir - Read and Know some facts about me"
  
  constructor() { }

  ngOnInit(): void {
  }

}
