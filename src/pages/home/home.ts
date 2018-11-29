import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ligas: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getLigas();
  }

  getLigas() {
    this.restProvider.getLigas()
    .then(data => {
      this.ligas = data;
      console.log(this.ligas);
    });
  }

}
