import { apiService } from '../../providers/apiService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
  private post: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private apiService: apiService) {
    this.post = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

  submitPost() {
    console.log(this.post.value);
    this.apiService.post(this.post.value.message);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
