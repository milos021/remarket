import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { OfferActions } from '../../offer.actions';
import { Offer } from '../../offer.model';
import { getSelectedOffer } from '../../offer.selectors';
import { OfferState } from '../../offer.state';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferDetailsComponent implements OnInit {
  offer$ = this.store.pipe(select(getSelectedOffer));

  constructor(protected store: Store<OfferState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(OfferActions.getOfferById({id: this.route.snapshot.paramMap.get('offerId')}))
  }

  voteForOffer = (offerId: string, votes: number) => {
    this.store.dispatch(OfferActions.offerVote({offerId, votes}));
  }

  addProductToCart = (offer: Offer) => {
    this.store.dispatch(OfferActions.addOfferToCart({offer}));
  }

}
