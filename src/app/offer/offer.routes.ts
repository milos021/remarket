import { Routes } from "@angular/router";
import { OfferDetailsComponent } from "./components/offer-details/offer-details.component";
import { OfferListComponent } from "./components/offer-list/offer-list.component";

export const offerRoutes: Routes = [{
  path: 'offers',
  children: [
    {
      path: '',
      component: OfferListComponent,
    },
    {
      path: ':offerId',
      component: OfferDetailsComponent,
    },
  ],
},
{
  path: '**',
  redirectTo: 'offers',
  pathMatch: 'full',
},
]
