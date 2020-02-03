import { Component } from '@angular/core';
import {ApiConfigMockService} from './services/api/apiConfigMockService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codingDojo';

  constructor(private apiConfigMockService: ApiConfigMockService) {
    this.apiConfigMockService.getApplications().subscribe({
      next: value => {
        console.log('value', value);
      }
    });
  }
}
