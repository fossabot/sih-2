
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

export const appRoutes:Routes = [
    { path: 'app-add', component: AddComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
]
