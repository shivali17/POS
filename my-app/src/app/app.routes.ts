import { Routes} from '@angular/router';

import { MainComponent } from './main/main.component';
import { BillComponent } from './bill/bill.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


export const routes: Routes = [
  {
    path: '',
    component: FirstpageComponent
  },
  {
    path: 'main-page/:userName',
    component: MainComponent
  }
]
