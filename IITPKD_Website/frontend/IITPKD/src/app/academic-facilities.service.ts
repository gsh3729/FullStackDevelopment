import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class AcademicFacilitiesService {
  private _academicsUrl='http://localhost:3000/academics';
  constructor(private http:HttpClient) {
   }
   public getAcademics(){
     return this.http.get<any>(this._academicsUrl);
   }
}
