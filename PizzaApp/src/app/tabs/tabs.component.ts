import {Component, Input} from '@angular/core';
import {IPizza} from "../app.model";
import {FormsModule} from "@angular/forms";
import {ReviewsComponent} from "../reviews/reviews.component";

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [
    FormsModule,
    ReviewsComponent
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() pizza!: IPizza;

  private activeTab = 1;
  tabMap = new Map<number, boolean>();

  constructor() {
    this.tabMap.set(this.activeTab, true);
  }

  public selectTab(tid: number) {
    this.tabMap.set(this.activeTab, false);
    this.activeTab = tid;
    this.tabMap.set(this.activeTab, true);
  }
}
