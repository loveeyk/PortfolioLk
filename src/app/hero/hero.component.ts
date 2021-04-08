import { Component, EventEmitter, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  sliderposition = 0;
  // @Output() sliderpositionChange:EventEmitter<number> =new EventEmitter<HeroComponent>();

   constructor() {
  
   }
  handleMouseUp(e:any){
    if(e.target.value >= 90){
      
    }
    this.sliderposition = 0;
  };
   
  ngOnInit(): void {
  }

  

}


