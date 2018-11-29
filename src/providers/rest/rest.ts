import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost/api/v1';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getLigas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/ligas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addLiga(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/crear', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
