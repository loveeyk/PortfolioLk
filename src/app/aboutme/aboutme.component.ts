import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  heading = "Hi, I'm Loveleen ! "
  subheading = " A certified Front End Developer"
  
  constructor() { }

  ngOnInit(): void {
  }

}
