// feedback.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  upvotes = 0;
  downvotes = 0;

  vote(isUpvote: boolean): void {
    if (isUpvote) {
      this.upvotes++;
    } else {
      this.downvotes++;
    }
  }
}
