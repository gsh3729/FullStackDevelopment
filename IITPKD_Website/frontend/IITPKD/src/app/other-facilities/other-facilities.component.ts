import { Component, OnInit } from '@angular/core';
import {FacilitiesService} from '../facilities.service'

@Component({
  selector: 'app-other-facilities',
  templateUrl: './other-facilities.component.html',
  styleUrls: ['./other-facilities.component.css']
})
export class OtherFacilitiesComponent implements OnInit {
  constructor(private _otherService:FacilitiesService) { }
  other=[];


  ngOnInit() {
    this._otherService.getOtherFacilities()
    .subscribe(
      (res)=>{
        this.other=res;
      },
      (err)=>console.log(err)
    );
  }
}
