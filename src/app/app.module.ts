import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ShareModule } from './share/share.module';
import { GifsModule } from './gifs/gifs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, 
    ShareModule, GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
