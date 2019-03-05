import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/title/title.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KatexModule } from 'ng-katex';
import { UserDataComponent } from './components/user-data/user-data.component';
import { AddCommitteeComponent } from './components/add-committee/add-committee.component';
import { CommitteeDetailComponent } from './components/committee-detail/committee-detail.component';
import { DHondtComponent } from './components/dhondt/dhondt.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './components/charts/charts.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserDataComponent,
    AddCommitteeComponent,
    CommitteeDetailComponent,
    DHondtComponent,
    ChartsComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    KatexModule,
    FlexLayoutModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
