import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptService } from  './token-intercept.service';
import { AuthService } from  './auth.service';
import { CoursesComponent } from './courses/courses.component';
import { UgProgramsComponent } from './ug-programs/ug-programs.component';
import { AcademicFacilitiesComponent } from './academic-facilities/academic-facilities.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import {AcademicFacilitiesService} from './academic-facilities.service';
import {FacultyService} from './faculty.service';
import {FacilitiesService} from './facilities.service';
import { HostelFacilitiesComponent } from './hostel-facilities/hostel-facilities.component';
import { OtherFacilitiesComponent } from './other-facilities/other-facilities.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CoursesComponent,
    UgProgramsComponent,
    AcademicFacilitiesComponent,
    FacultyComponent,
    FacilitiesComponent,
    HostelFacilitiesComponent,
    OtherFacilitiesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [AuthService,AcademicFacilitiesService,FacultyService,AuthGuard,FacilitiesService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
