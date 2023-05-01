import { Component } from '@angular/core';
import { inject } from '@vercel/analytics';

inject();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sanje Analytica';
}
