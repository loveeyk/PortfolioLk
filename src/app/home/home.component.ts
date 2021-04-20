import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heading = "Welcome to Loveey's Website"
 subheading = "click on the apps to navigate" 

  constructor() { }

  ngOnInit(): void {
  }

}
