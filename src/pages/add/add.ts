import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  home=HomePage;

  contacto={
    name: "",
    mail: "",
    cel: "",
    fb: "",
    twitter: "",
    inst: "",
    img: "../assets/imgs/02.jpg"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  sendHome(){
    if(this.contacto.name!=""&&this.contacto.cel!=""){
    this.navCtrl.push(this.home,this.contacto);
    }else{
      const alert=this.alertCtrl.create({
      title: "Oh no!",
      subTitle: "Necesitas escribir un nombre y teléfono",
      buttons: ["Ok"]
      });
      alert.present();
    }
  }

}
