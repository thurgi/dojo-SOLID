import {ApiConfigInterface} from './ApiConfigInterface';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApplicationVar} from '../../model/applicationVar';
import {StorageApplicationInterface} from './StorageApplicationInterface';

abstract class ApplicationsStorageServiceAbstract implements StorageApplicationInterface {

  private url = 'dataUrl';
  private applicationVars: BehaviorSubject<ApplicationVar[]> = new BehaviorSubject<ApplicationVar[]>([]);

  constructor(private apiConfigInterface: ApiConfigInterface) {
    this.getData();
  }

  protected getData(): BehaviorSubject<ApplicationVar[]> {
    this.apiConfigInterface.fetchData(this.url).subscribe((val) => {
      this.applicationVars.next(val);
    });
    return this.applicationVars;
  }

  abstract getApplications(): Observable<ApplicationVar[]>;
}
