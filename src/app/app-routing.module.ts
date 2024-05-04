import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./pages/login/login.component";
import {RoleComponent} from "./pages/role/role.component";
import {CondidatRegisterComponent} from "./pages/condidat-register/condidat-register.component";
import {OfferComponent} from "./pages/dashboard/offer/offer.component";
import {ProfileComponent} from "./pages/dashboard/profile/profile.component";
import {AdminOfferComponent} from "./pages/dashboard/admin/admin-offer/admin-offer.component";
import {CondidateComponent} from "./pages/dashboard/admin/condidate/condidate.component";
import {RecruiterComponent} from "./pages/dashboard/admin/recruiter/recruiter.component";
import {AddOfferComponent} from "./pages/dashboard/add-offer/add-offer.component";
import {MyOfferComponent} from "./pages/dashboard/my-offer/my-offer.component";
import {SubmitListComponent} from "./pages/dashboard/submit-list/submit-list.component";
import {OfferDetailsComponent} from "./pages/dashboard/offer-details/offer-details.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'role', component: RoleComponent },
  { path: 'candidate-register', component: CondidatRegisterComponent },
  { path: 'dashboard', component: DashboardComponent, children:[
      { path: 'home', component: OfferComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-offer', component: AddOfferComponent },
      { path: 'admin-offer', component: AdminOfferComponent },
      { path: 'admin-candidate', component: CondidateComponent },
      { path: 'admin-recruiter', component: RecruiterComponent },
      { path: 'my-offer', component: MyOfferComponent },
      { path: 'submit-list', component: SubmitListComponent },
      { path: 'details', component: OfferDetailsComponent },
    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
