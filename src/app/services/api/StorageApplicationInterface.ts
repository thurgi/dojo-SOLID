import {Observable} from 'rxjs';
import {ApplicationVar} from '../../model/applicationVar';

export interface StorageApplicationInterface {
  getApplications(): Observable<ApplicationVar[]>;
}
