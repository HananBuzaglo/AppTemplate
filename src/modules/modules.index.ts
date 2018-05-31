import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './router/router.module';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from './translate/translate.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      RoutingModule,
      MaterialModule,
      TranslateModule
    ],
    exports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      RoutingModule,
      MaterialModule,
      TranslateModule
    ]

  })
export class MODULES {}
