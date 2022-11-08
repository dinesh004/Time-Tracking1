import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDataComponent } from './edit-data/edit-data.component';


@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    CreateDataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
