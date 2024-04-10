import {Component, Input} from '@angular/core';

@Component({
  selector: 'ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent {
  @Input() ingredients?: string;
}
