import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ServerService} from './server.service';
import {ApiModule} from './api/api.module';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApiModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
