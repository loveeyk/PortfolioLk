import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  sliderposition = 0;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  passData(){
    this.notify.emit(this.sliderposition)
  }

   constructor() {
  
   }
  handleMouseUp(e:any){
    if(e.target.value >= 90){
      
    }else{
      this.sliderposition = 0;
    }
    this.passData()
   
  };
   
  ngOnInit(): void {
  }

  

}


