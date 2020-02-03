import {Observable} from 'rxjs';
import {ApplicationVar} from '../../model/applicationVar';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiConfigMockService {

  private applicationVarMock: ApplicationVar[] = [
    {
      id: 'alpha',
      categories: [
        {
          id: 'alpha',
          label: 'alpha',
          sections: [
            {
              label: 'alpha',
              variables: [
                {
                  name: 'alpha',
                  label: 'alpha',
                  description: 'alpha',
                  type: 'STRING',
                  format: 'alpha',
                  readOnly: true,
                  restricted: true,
                  restartNeeded: true,
                  scope: 'USER',
                  level: 'USER',
                  value: 'alpha'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'beta',
      categories: [
        {
          id: 'beta',
          label: 'beta',
          sections: [
            {
              label: 'beta',
              variables: [
                {
                  name: 'beta',
                  label: 'beta',
                  description: 'beta',
                  type: 'STRING',
                  format: 'beta',
                  readOnly: true,
                  restricted: true,
                  restartNeeded: true,
                  scope: 'USER',
                  level: 'USER',
                  value: 'beta'
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
