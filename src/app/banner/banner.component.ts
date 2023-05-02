import { Component } from '@angular/core';
import { LoggingService } from 'src/services/LoggingService';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: []
})
export class BannerComponent {
  constructor(private loggingService: LoggingService) {}

  log(): void {
    this.loggingService.log('Un usuario quiere ingresar');
  }
}
