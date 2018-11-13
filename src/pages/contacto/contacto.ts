import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  name="";
  mail="";
  cel="";
  fb="";
  twitter="";
  ints="";
  img="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get("name");
    this.mail=this.navParams.get("mail");
    this.img=this.navParams.get("img");
    this.cel=this.navParams.get("cel");
    this.fb=this.navParams.get("fb");
    this.twitter=this.navParams.get("twitter");
    this.ints=this.navParams.get("inst");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
