import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { PatientComponent } from './components/patient/patient.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'register',
    component: UserRegistrationComponent
  },
  // {
  //   path: 'doctor/register-patient',
  //   component: PatientRegistrationComponent,
  // },
  {
    path:'doctor/:username/patients/:patId',
    component: ViewPatientComponent,
  },
  {
    path:'admin/users/:username',
    component: ViewUserComponent,
  },
  {
    path: 'admin',
    component:AdminComponent,
  },
  {
    path: 'doctor/:username',
    component:DoctorComponent,
  },
  // {
  //   path: 'doctor',
  //   component:DoctorComponent,
  // },
  {
    path: 'patient/:username',
    component:PatientComponent,
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'unauthorized',
    component:UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
