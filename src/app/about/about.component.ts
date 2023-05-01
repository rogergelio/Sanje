import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: []
})
export class AboutComponent{
  constructor(private elementRef: ElementRef) {}

  scrollToNextSection() {
    const nextSection = document.querySelector('#how-click'); //Estado que apunta al próximo componente
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
