import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { UgProgramsComponent } from './ug-programs/ug-programs.component';
import { AcademicFacilitiesComponent } from './academic-facilities/academic-facilities.component';
 import { FacultyComponent } from './faculty/faculty.component';
 import { HostelFacilitiesComponent } from './hostel-facilities/hostel-facilities.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtherFacilitiesComponent } from './other-facilities/other-facilities.component';
import {AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',
  redirectTo:'/home',
  pathMatch:'full'
  },//starting url
  {path:'home',component:HomeComponent},
  //{path:'hotels',component:HotelsComponent,canActivate:[AuthGuard]},
  //{path:'users',component:UsersComponent},
  {path:'about',component:AboutComponent},
  // {path:'events',component:EventsComponent},
  // {path:'comments',component:CommentsComponent},
  // {path:'posts',component:PostsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'hostel-facilities',component:HostelFacilitiesComponent},
  {path:'other-facilities',component:OtherFacilitiesComponent},
  {path:'courses',component:CoursesComponent},
  {path:'ug-programs',component:UgProgramsComponent},
  {path:'academic-facilities',component:AcademicFacilitiesComponent},
  {path:'faculty',component:FacultyComponent,canActivate:[AuthGuard]},
  //{path:'hotel-details',component:HotelDetailsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
