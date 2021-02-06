import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './app/Sections/SectionSales/SectionSales.component';
import { SectionOrdersComponent } from './app/Sections/SectionOrders/SectionOrders.component';
import { SectionHealthComponent } from './app/Sections/SectionHealth/SectionHealth.component';

export const appRoutes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent },
  { path: 'health', component: SectionHealthComponent },

  { path: '', redirectTo: '/sales', pathMatch: 'full' },
];
