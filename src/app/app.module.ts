import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { ResearchWithBrandComponent } from './research-with-brand/research-with-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    UpdateCarComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent,
    ResearchWithBrandComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
