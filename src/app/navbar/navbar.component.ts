import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = "../../assets/logo.svg"
  logo = "L K"
  home = "Home"
  about = "About me"
  project = "My Projects"
  contact = "Hire Me"
  skills = "My Skills"
  cv = "CV"

  constructor() { }

  ngOnInit(): void {
  }

}
