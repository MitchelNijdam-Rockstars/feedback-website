import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  thumbsUp = 0;
  thumbsDown = 0;

  increaseThumbsUp() {
    this.thumbsUp++;
  }

  increaseThumbsDown() {
    this.thumbsDown++;
  }

  getApprovalPercentage(): number {
    const total = this.thumbsUp + this.thumbsDown;
    return total > 0 ? Math.round((this.thumbsUp / total) * 100) : 0;
  }
}
