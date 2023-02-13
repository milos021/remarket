import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent {
  @Output() voteUp: EventEmitter<boolean> = new EventEmitter();
  @Output() voteDown: EventEmitter<boolean> = new EventEmitter();

}
