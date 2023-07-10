import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SuicModule } from 'suic-angular/dist';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SuicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
