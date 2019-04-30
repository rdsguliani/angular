import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShortenPipe } from "./shorten.pipe"
import { FilteredPipe } from "./filtered.pipe"
import { ReversePipe } from "./reverse.pipe"
import { SortPipe } from "./sort.pipe"
import { TrustedPipe } from "./trusted.pipe"

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilteredPipe,
    ReversePipe,
    SortPipe,
    TrustedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
