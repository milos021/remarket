import { Offer } from './offer.model';

export interface OfferState {
  offers?: Offer[];
  selectedOffer?: Offer;
  cart?: Offer[];
}

export const initialState: OfferState = {
  offers: [],
  selectedOffer: undefined,
  cart: []
};
