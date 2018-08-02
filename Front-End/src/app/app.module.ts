
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './service/patient.service';
import { LoginUserService } from './service/loginuser.service';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';
import { UserComponent } from './components/user/user.component';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

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
    PatientComponent,
    UserComponent,
    UnauthorizedComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PatientService, LoginUserService, AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
