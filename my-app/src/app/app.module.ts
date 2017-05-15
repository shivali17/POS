import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes} from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BillComponent,
    FirstpageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
