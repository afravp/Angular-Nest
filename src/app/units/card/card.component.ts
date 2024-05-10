import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
department=[
  {
    id:1,
    Title:"Aerospace&defence",
    Image:"../../../assets/aerospace.png",
    Description:"guujxjgsdykjsiwyedjsjjd",
  },
  {
    id:2,
    Title:"banking&financial",
    Image:"../../../assets/banking.png",
    Description:"guujjhfwupkjgtdf",
  },
]
}
