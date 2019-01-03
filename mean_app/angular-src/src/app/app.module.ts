import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import {ListService } from './services/list.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { RolefilterPipe } from './rolefilter.pipe';
import { UserstatusfilterPipe } from './userstatusfilter.pipe';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    RolefilterPipe,
    UserstatusfilterPipe


  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    SlimLoadingBarModule.forRoot()
  ],
  exports: [ RouterModule ],

  providers: [ListService,AuthGuard, {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtInterceptor,
                multi: true
            },],
  bootstrap: [AppComponent]
})
export class AppModule { }
