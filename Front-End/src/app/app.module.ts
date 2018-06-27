import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientService } from './service/patient.service';
import { LoginUserService } from './service/loginuser.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewPatientComponent,
    ViewUserComponent,
    PatientRegistrationComponent,
    UserRegistrationComponent,
    DoctorComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PatientService, LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
