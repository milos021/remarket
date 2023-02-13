import { createReducer, Action, on } from '@ngrx/store';
import { OfferActions } from './offer.actions';
import { OfferState, initialState } from './offer.state';

export { OfferState, initialState };

const reducer = createReducer(
  initialState,
  on(OfferActions.loadOffers, (_state, _action) => initialState),
  on(OfferActions.loadOffersSuccess, (state, { offers }) => ({
    ...state,
    offers
  })),
  on(OfferActions.getOfferByIdSuccess, (state, { offer }) => ({
    ...state,
    selectedOffer: offer
  })),
  on(OfferActions.setOffersSuccess, (state, { offers }) => ({
    ...state,
    offers
  })),
  on(OfferActions.addOfferToCart, (state, { offer }) => ({
    ...state,
    cart: [...state.cart, offer]
  }))
);

export function offerReducer(state: OfferState = initialState, action: Action): OfferState {
  return reducer(state, action);
}
