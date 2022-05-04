// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { EmployeeFormComponent } from './employee-form/employee-form.component';
// import { Child1Component } from './child1/child1.component';
// import { Parent1Component } from './parent1/parent1.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     EmployeeFormComponent,
//     Child1Component,
//     Parent1Component
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent,EmployeeFormComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
@NgModule({
  declarations: [
    Child1Component,
    Parent1Component
  ],
  imports: [
    BrowserModule,

    FormsModule,

  ],
  providers: [],
})
export class AppModule { }
