import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor( private httpClient: HttpClient) { }
  getLogin(infos: any) {
    // let headers = new HttpHeaders();
    // headers = headers.set("Content-Type", 'undefined');


    return this.httpClient.post("http://192.168.0.146:5000/login", infos);
  }

//   handleError(error: HttpErrorResponse) {
//     return throwError(error);
// }
}
