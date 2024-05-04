import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzListModule} from "ng-zorro-antd/list";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { LoginComponent } from './pages/login/login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import { RoleComponent } from './pages/role/role.component';
import { CondidatRegisterComponent } from './pages/condidat-register/condidat-register.component';
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import { RecruiterComponent } from './pages/dashboard/admin/recruiter/recruiter.component';
import { CondidateComponent } from './pages/dashboard/admin/condidate/condidate.component';
import { AdminOfferComponent } from './pages/dashboard/admin/admin-offer/admin-offer.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { OfferDetailsComponent } from './pages/dashboard/offer-details/offer-details.component';
import { OfferComponent } from './pages/dashboard/offer/offer.component';
import { AddOfferComponent } from './pages/dashboard/add-offer/add-offer.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import { MyOfferComponent } from './pages/dashboard/my-offer/my-offer.component';
import { SubmitListComponent } from './pages/dashboard/submit-list/submit-list.component';
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzCollapseModule} from "ng-zorro-antd/collapse";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RoleComponent,
    CondidatRegisterComponent,
    RecruiterComponent,
    CondidateComponent,
    AdminOfferComponent,
    ProfileComponent,
    OfferDetailsComponent,
    OfferComponent,
    AddOfferComponent,
    MyOfferComponent,
    SubmitListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCarouselModule,
    NzCardModule,
    NzListModule,
    NzToolTipModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzStepsModule,
    NzIconModule,
    NzDatePickerModule,
    NzTableModule,
    NzModalModule,
    NzSelectModule,
    NzInputNumberModule,
    NzDrawerModule,
    NzAlertModule,
    NzCollapseModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
