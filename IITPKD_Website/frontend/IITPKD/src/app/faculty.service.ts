import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private _facultyUrl='http://localhost:3000/faculty';
  constructor(private http:HttpClient) {
   }
   public getFaculty(){
     return this.http.get<any>(this._facultyUrl);
   }
   public getFacFilter(filter){
     return this.http.get<any>(this._facultyUrl+'?filt='+filter);
   }
}
