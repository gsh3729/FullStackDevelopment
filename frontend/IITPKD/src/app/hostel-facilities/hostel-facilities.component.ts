import { Component, OnInit } from '@angular/core';
import {FacilitiesService} from '../facilities.service'
@Component({
  selector: 'app-hostel-facilities',
  templateUrl: './hostel-facilities.component.html',
  styleUrls: ['./hostel-facilities.component.css']
})
export class HostelFacilitiesComponent implements OnInit {

  constructor(private _hostelService:FacilitiesService) { }
  hostels=[];


  ngOnInit() {
    this._hostelService.getHostels()
    .subscribe(
      (res)=>{
        this.hostels=res;
      },
      (err)=>console.log(err)
    );
  }
}
