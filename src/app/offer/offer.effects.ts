import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { OfferState } from './offer.state';
import { OfferService } from './offer.service';
import { OfferActions } from './offer.actions';
import { Offer } from './offer.model';
import { of } from 'rxjs';

@Injectable()
export class OfferEffects {
  constructor(
    protected actions$: Actions,
    protected store: Store<OfferState>,
    protected offerService: OfferService,
  ) {}


  loadOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferActions.loadOffers),
      switchMap(() =>
        this.offerService.getOffers().pipe(
          map((offers: Offer[]) => OfferActions.loadOffersSuccess({ offers })),
          catchError((error) => of(OfferActions.loadOffersFail({ error })))
        )
      )
    )
  );

  getOfferById$ = createEffect(() =>
   this.actions$.pipe(
    ofType(OfferActions.getOfferById),
    switchMap(({id}) =>
      this.offerService.getOfferById(id).pipe(
        map((offer: Offer) => OfferActions.getOfferByIdSuccess({ offer })),
        catchError((error) => of(OfferActions.getOfferByIdFail({ error })))
      )
    )
  )
);

voteOffer$ = createEffect(() =>
  this.actions$.pipe(
    ofType(OfferActions.offerVote),
    switchMap(({offerId, votes}) =>
      this.offerService.voteForOffer(offerId, votes).pipe(
        map((offers: Offer[]) => OfferActions.setOffers({ offers })),
      )
    )
  )
);

setOffers$ = createEffect(() =>
this.actions$.pipe(
 ofType(OfferActions.setOffers),
 switchMap(({offers}) =>
   of(OfferActions.setOffersSuccess({ offers }))
 )
)
);





}
