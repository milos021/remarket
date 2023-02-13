import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Offer } from '../../offer.model';

@Component({
  selector: 'app-offer-details-body',
  templateUrl: './offer-details-body.component.html',
  styleUrls: ['/offer-details-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferDetailsBodyComponent {
@Input() offer: Offer;
@Input() voteForOffer : (offerId: string, votes: number) => void
@Input() addProductToCart : (offer: Offer) => void

}
