import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Offer } from '../../offer.model';

@Component({
  selector: 'app-offer-list-body',
  templateUrl: './offer-list-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferListBodyComponent {
  @Input() offers: Offer[];
  @Input() voteForOffer : (offerId: string, votes: number) => void
  @Input() addProductToCart : (offer: Offer) => void


}
