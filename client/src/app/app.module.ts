import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorddatePipe } from './pipe/worddate.pipe';
import { StringworddatePipe } from './pipe/stringworddate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    WorddatePipe,
    StringworddatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
