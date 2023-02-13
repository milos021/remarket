import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Offer } from '../../offer.model';

@Component({
  selector: 'app-offer-list-item',
  templateUrl: './offer-list-item.component.html',
  styleUrls: ['./offer-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferListItemComponent {
  @Input() offer: Offer;
  @Input() voteForOffer : (offerId: string, votes: number) => void
  @Input() addProductToCart : (offer: Offer) => void
}
