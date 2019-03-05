import { ChartsComponent } from './components/charts/charts.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'userData', pathMatch: 'full'},
  { path: 'userData', component: UserDataComponent },
  { path: 'charts', component: ChartsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
