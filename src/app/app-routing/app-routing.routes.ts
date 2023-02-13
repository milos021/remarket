import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'offers',
    loadChildren: () => import('../offer/offer.module').then(m => m.OfferModule),
  },
  {
    path: '**',
    redirectTo: 'offers',
    pathMatch: 'full',
  },
];
