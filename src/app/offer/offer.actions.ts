import { createAction, props } from '@ngrx/store';
import { Offer } from './offer.model';

export class OfferActions {
  static loadOffers = createAction('[Offer] Load Offers');

  static loadOffersSuccess = createAction('[Offer] Load Offers Success', props<{ offers: Offer[] }>());
  static loadOffersFail = createAction('[Offer] Load Offers Fail', props<{ error: string }>());

  static setOffers = createAction(
    '[Offer] Set Offers',
    props<{ offers: Offer[] }>()
  );

  static setOffersSuccess = createAction('[Offer] Set Offers Success', props<{ offers: Offer[] }>());
  static setOffersFail = createAction('[Offer] Set Offers Fail', props<{ error: string }>());

  static selectOffer = createAction(
    '[Offer] Select Offer',
    props<{ selectedOffer: Offer }>()
  );

  static getOfferById = createAction(
    '[Offer] Get Offer By Id',
    props<{ id: string }>()
  );

  static getOfferByIdSuccess = createAction('[Offer] Get Offer By Id Success', props<{ offer: Offer }>());
  static getOfferByIdFail = createAction('[Offer] Get Offer By Id Fail', props<{ error: string }>());

  static offerVote = createAction(
    '[Offer] Offer Vote',
    props<{ offerId: string, votes: number }>()
  );

  static offerVoteSuccess = createAction(
    '[Offer] Offer Vote Success',
    props<{ offerId: string }>()
  );

  static offerVoteFail = createAction(
    '[Offer] Offer Vote Fail'
  );

  static addOfferToCart = createAction(
    '[Offer] Add To Cart',
    props<{ offer: Offer }>()
  );
}
