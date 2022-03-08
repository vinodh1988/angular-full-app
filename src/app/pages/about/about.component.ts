import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  types:string[]=["All","Branding and Communication","Inbound & Content Marketing","Film & Webinar","Digital Marketing","ECommerce & Websites",
  "Market Analysis"]

  revenue:number=50;

  now:string="All";

  flist:any;

  constructor(private hs:HomeService) { }

  ngOnInit(): void {

    this.hs.getFeedbacks().subscribe({
      next: (data:any)=>this.flist=data,
      error:(error:any)=>this.flist=[]
    })
  }

}
