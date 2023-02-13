import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { VoteComponent } from './vote/vote.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    VoteComponent,
    SortByPipe
  ],
  exports: [
    ButtonComponent,
    VoteComponent,
    SortByPipe
  ]
})
export class SharedModule { }
