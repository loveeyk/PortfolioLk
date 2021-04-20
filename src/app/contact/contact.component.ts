import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = new FormControl('');

  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    message: new FormControl(''),
  });
  
  constructor() { }

  
  ngOnInit(): void {
  }

  onSubmit(){

    if(this.info.valid){

      var a = this.info.value;

      console.log(a)

   }

  }

}
