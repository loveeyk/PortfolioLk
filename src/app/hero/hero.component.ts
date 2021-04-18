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

   constructor() {}

   /**
    * Resets slider if < 90 otherwise saves
    * (For Mouse)
    * @param e the current sliding position
    */
  handleMouseUp(e:any){
    if(e.target.value >= 90){
      this.sliderposition = e.target.value
    }else{
      this.sliderposition = 0;
    }
    this.passData()
  };

  /**
    * Resets slider if < 90 otherwise saves
    * For Touch
   * @param e sliding position
   */
  handleTouchEnd(e:any){
   this.sliderposition =  e.target.value >= 90 ? e.target.value: 0;
   this.passData()
  }
   
  ngOnInit(): void {
  }

  

}


