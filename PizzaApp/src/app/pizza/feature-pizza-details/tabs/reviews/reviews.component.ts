import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IReview} from "@pizza/data-access";

@Component({
  selector: 'reviews',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  @Input() reviews: Array<IReview> = [];
  newReview: IReview = {};
  @Output() addReview = new EventEmitter<IReview>();

  ngOnInit() {
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.addReview.emit(this.newReview);
    this.newReview = {};
  }
}
