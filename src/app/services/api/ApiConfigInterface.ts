import {BehaviorSubject, Observable} from 'rxjs';
import {ApplicationVar} from '../../model/applicationVar';

export interface ApiConfigInterface {

  fetchData(url: string): BehaviorSubject<ApplicationVar[]>;
}
