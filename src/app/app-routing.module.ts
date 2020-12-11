import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'SignUp', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact us', component: ContactusComponent },
  { path: 'AdminLogin', component: AdminComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'Success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,RegistrationComponent,LoginComponent,AboutComponent,ContactusComponent,AdminComponent,MemberComponent,SuccessComponent]
