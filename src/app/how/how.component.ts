import { Component } from '@angular/core';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent {
  scrollToNextSection() {
    const nextSection = document.querySelector('#contact-us');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
