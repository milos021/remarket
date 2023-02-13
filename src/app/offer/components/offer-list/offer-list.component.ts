import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { OfferActions } from '../../offer.actions';
import { Offer } from '../../offer.model';
import { getOffers } from '../../offer.selectors';
import { OfferState } from '../../offer.state';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferListComponent implements OnInit {
  offers$ = this.store.pipe(select(getOffers));

  constructor(private store: Store<OfferState>) { }

  ngOnInit() {
    this.store.dispatch(OfferActions.loadOffers());
  }

  voteForOffer = (offerId: string, votes: number) => {
    this.store.dispatch(OfferActions.offerVote({offerId, votes}));
  }

  addProductToCart = (offer: Offer) => {
    this.store.dispatch(OfferActions.addOfferToCart({offer}));
  }

}
