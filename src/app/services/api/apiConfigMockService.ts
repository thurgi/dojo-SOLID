import {Observable} from 'rxjs';
import {ApplicationVar} from '../../model/applicationVar';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiConfigMockService {

  private applicationVarMock: ApplicationVar[] = [
    {
      id: 'string',
      categories: [
        {
          id: 'string',
          label: 'string',
          sections: [
            {
              label: 'string',
              variables: [
                {
                  name: 'string',
                  label: 'string',
                  description: 'string',
                  type: 'STRING',
                  format: 'string',
                  readOnly: true,
                  restricted: true,
                  restartNeeded: true,
                  scope: 'USER',
                  level: 'USER',
                  value: 'string'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  public getApplications(): Observable<ApplicationVar[]> {
    return new Observable<ApplicationVar[]>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.applicationVarMock);
      }, 500);
    });
  }
}
