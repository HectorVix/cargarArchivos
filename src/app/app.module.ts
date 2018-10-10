import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule ,FileSelectDirective } from 'ng2-file-upload'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UploadModule } from './upload/upload.module'

@NgModule({
  declarations: [
    AppComponent
 
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    FileUploadModule,
    BrowserAnimationsModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
