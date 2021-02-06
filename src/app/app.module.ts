import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { appRoutes } from '../routes.routing'

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionSalesComponent } from './Sections/SectionSales/SectionSales.component';
import { SectionOrdersComponent } from './Sections/SectionOrders/SectionOrders.component';
import { SectionHealthComponent } from './Sections/SectionHealth/SectionHealth.component';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      SidebarComponent,
      SectionSalesComponent,
      SectionOrdersComponent,
      SectionHealthComponent
   ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
