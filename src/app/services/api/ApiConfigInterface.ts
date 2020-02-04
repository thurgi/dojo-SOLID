import {Observable} from "rxjs";
import {ApplicationVar} from "../../model/applicationVar";

export interface ApiConfigInterface {
  getApplications(): Observable<ApplicationVar[]>;
}
