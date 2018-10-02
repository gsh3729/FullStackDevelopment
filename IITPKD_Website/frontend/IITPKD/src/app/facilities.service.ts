import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  private _hostelfacilitiesUrl='http://localhost:3000/hostelFacilities';
  private _otherfacilitiesUrl='http://localhost:3000/otherFacilities';

  constructor(private http:HttpClient) {
   }
   public getHostels(){
     return this.http.get<any>(this._hostelfacilitiesUrl);
   }
   public getOtherFacilities(){
     return this.http.get<any>(this._otherfacilitiesUrl);
   }
}
