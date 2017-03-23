import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs/Rx';
import { NavController, NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';


import { apiService } from '../../providers/apiService';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private start: number = 0;
  public plrList: Array<Object> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: apiService,
    public loadingCtrl: LoadingController) {

  }

  getPlr(page): void {
    this.apiService.getList(page);
  }

  ngOnInit(): void {
    this.getPlr(this.start);

    this.apiService.plrObservableList.subscribe(
      (res) => {
        console.log('wee', res);
        console.log(this.plrList);
        for (let item of res) {
          this.plrList.push(item);
        }
      },
      (error) => {
        console.log('erro', error);
      }
    )
  }

  doInfinite(infiniteScroll: any) {
    console.log('doInfinite, start is currently ' + this.start);
    this.start++;
    this.getPlr(this.start);
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  };

}
