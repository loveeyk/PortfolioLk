import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-skillbar',
  templateUrl: './skillbar.component.html',
  styleUrls: ['./skillbar.component.css'],
  animations: [trigger('fadeIn', [transition(':enter', [style({ width: 0 }),
  animate('2s cubic-bezier(0, 0, 0.2, 1)', style({ width: "level" }))])])]
})

export class SkillbarComponent implements OnInit {

  @Input() tagstring: String = ""
  @Input() level: string = "";
  @Input() image?: string = "";
  @Input() primaryColor: string = "";
  @Input() secondaryColor: string = "";



  getGradient() {
    return `linear-gradient(45deg, ${this.primaryColor} 25%, transparent 25%, transparent 50%, ${this.primaryColor} 50%, ${this.primaryColor} 75%, transparent 75%, transparent)`
  }



  ngOnInit(): void {
    console.log(this.tagstring, this.level)
  }

}
