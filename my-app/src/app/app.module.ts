import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes} from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  {
    path: '',
    component: FirstpageComponent
  },
  {
    path: 'main-page/:userName',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
