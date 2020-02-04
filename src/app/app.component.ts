import { Component } from '@angular/core';
import {ApiConfigMockService} from './services/api/apiConfigMockService';
import {ApplicationVar} from "./model/applicationVar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codingDojo';

  receivedFromService: ApplicationVar[];

  constructor(private apiConfigMockService: ApiConfigMockService) {
    this.apiConfigMockService.getApplications().subscribe({
      next: value => {
        this.receivedFromService = value;
      }
    });
  }
}
