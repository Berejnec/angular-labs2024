import {Component, Input} from '@angular/core';
import {IPizza, IReview} from "../app.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() pizza!: IPizza;

  private activeTab = 1;
  tabMap = new Map<number, boolean>();

  newReview: IReview = {};

  constructor() {
    this.tabMap.set(this.activeTab, true);
  }

  public selectTab(tid: number) {
    this.tabMap.set(this.activeTab, false);
    this.activeTab = tid;
    this.tabMap.set(this.activeTab, true);
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.pizza.reviews.push(this.newReview);
    this.newReview = {};
  }
}
