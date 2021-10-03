import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../faculty.service';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private _facService:FacultyService) { }
  faculty=[];
  image='../../assets/images/faculty';
  jpg='.jpg';
  filter:string;
  ngOnInit() {
    this._facService.getFaculty()
    .subscribe(
      (res)=>{
        this.faculty=res;
      },
      (err)=>console.log(err)
    );
  }
  getFacultyFilter(filter){
    this._facService.getFacFilter(filter)
    .subscribe(
      (res)=>{
        this.faculty=res;
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
