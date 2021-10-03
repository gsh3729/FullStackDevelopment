import { Component, OnInit } from '@angular/core';
import {AcademicFacilitiesService} from '../academic-facilities.service';
@Component({
  selector: 'app-academic-facilities',
  templateUrl: './academic-facilities.component.html',
  styleUrls: ['./academic-facilities.component.css']
})
export class AcademicFacilitiesComponent implements OnInit {

  constructor(private _acadService:AcademicFacilitiesService) { }
  academics=[];


  ngOnInit() {
    this._acadService.getAcademics()
    .subscribe(
      (res)=>{
        this.academics=res;
      },
      (err)=>console.log(err)
    );
  }

}
