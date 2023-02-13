import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { RouterModule } from '@angular/router';
import { offerRoutes } from './offer.routes';
import { SharedModule } from '../shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { offerReducer } from './offer.reducers';
import { OfferEffects } from './offer.effects';
import { OfferListBodyComponent } from './components/offer-list-body/offer-list-body.component';
import { OfferListItemComponent } from './components/offer-list-item/offer-list-item.component';
import { OfferDetailsBodyComponent } from './components/offer-details-body/offer-details-body.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(offerRoutes),
    SharedModule,
    StoreModule.forFeature('offer', offerReducer),
    EffectsModule.forFeature([OfferEffects]),
  ],
  declarations: [
    OfferListComponent,
    OfferListBodyComponent,
    OfferListItemComponent,
    OfferDetailsComponent,
    OfferDetailsBodyComponent
  ]
})
export class OfferModule { }
