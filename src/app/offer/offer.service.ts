import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { OfferState } from './offer.state';
import { Observable, of } from 'rxjs';
import { Offer } from './offer.model';
import { offersDummyData } from './offer.constants';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(
    protected httpClient: HttpClient,
    protected store: Store<OfferState>
  ) {}

//* Only temp, we would work with http calls in the real life scenario;
  getOffers(): Observable<Offer[]> {
    return of(offersDummyData)
  }

  getOfferById(offerId: string): Observable<Offer | undefined> {
    const offer = offersDummyData.find(offer => offer.id === offerId);
    return of(offer);
  }

  voteForOffer(offerId: string, votes: number): Observable<Offer[]> {
    const offers = offersDummyData.map(dummyOffer =>
      dummyOffer.id === offerId
       ? {
        ...dummyOffer,
        votes
      }
        : dummyOffer
    )
    return of(offers);
  }
}
