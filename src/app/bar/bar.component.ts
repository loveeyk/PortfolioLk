import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  now: Date = new Date()
  test_date: Date = new Date()
  time: string = ""

  constructor() { 
    // setInterval(() => {
    //   this.now = new Date()
    //   // this.test_date = new Date(this.increaseTime(1000000000,this.now)) FOR TESTING FUTURE CLOCK TIME
    //   this.time =  `${this.checkTime(this.now.getHours())} : ${this.checkTime(this.now.getMinutes())}`
    // }, 1000);
  }

  increaseTime(offset_in_ms:number, date:Date){
    return date.getTime()+offset_in_ms
  }
  checkTime(time:number):string{
 
    let toTwoDigits = ""

    if(time%10 === time){
      toTwoDigits = `0${time}`
    }

    return time%10 === time ? `0${time}` : `${time}`;
  }

  ngOnInit(): void {
  }

}
