import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OfferState } from './offer.reducers';

export const getOfferState = createFeatureSelector<OfferState>('offer');

export const getOffers = createSelector(getOfferState, state => state && state.offers);

export const getSelectedOffer = createSelector(getOfferState, state => state && state.selectedOffer);
