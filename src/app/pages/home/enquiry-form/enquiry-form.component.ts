import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  fname:any;
  lname:any;
  email:any;
  company:any;
  message:any;
  errors:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    
  }

}
