import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-phoneframe',
  templateUrl: './phoneframe.component.html',
  styleUrls: ['./phoneframe.component.css','../../devices.min.css']
})
export class PhoneframeComponent implements OnInit {
  public screenWidth: any;
  public screenHeight: any;

  constructor() { }

  ngOnInit() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth < 600){
      console.log("handy")
    }
    
  }

}
