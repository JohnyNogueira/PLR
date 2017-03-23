import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

// Operators
import 'rxjs/add/operator/map';



@Injectable()
export class apiService {
  private apiUrlTemplate: string;

  plrObservableList: Subject<any> = new Subject();

  constructor(public http: Http) {
    this.apiUrlTemplate = `http://racplr.azurewebsites.net/api/v1/`;
  }

  getList(page): void {
    let url = `${this.apiUrlTemplate}scrap?page=${page}`;

    this.http.get(url).map(response => response.json()).subscribe(
      (response) => {
        console.log(response);
        this.plrObservableList.next(response);
      },
      (error) => {
        console.error('error while getting data!\n', error);
      }
    );
  }

}
