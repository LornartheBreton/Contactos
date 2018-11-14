import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddPage } from '../add/add';
import { ContactoPage } from '../contacto/contacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  add=AddPage;
  see=ContactoPage;
  contacto:number;
  contactos=[
   {
     name: "Hector Gomez T. Torres",
     mail: "hectorspacejam@gmail.com",
     cel: "(33) 23 46 24 54",
     fb: "lornar.breton",
     twitter: "@LornartheBreton",
     inst: "LornartheBreton",
     img: "../assets/imgs/hgtt.jpg"
   } 
  ];
  temp={
    name: "",
    mail: "",
    cel: "",
    fb: "",
    twitter: "",
    inst: "",
    img: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.temp.name=this.navParams.get('name');
    this.temp.mail=this.navParams.get('mail');
    this.temp.cel=this.navParams.get('cel');
    this.temp.fb=this.navParams.get('fb');
    this.temp.twitter=this.navParams.get('twitter');
    this.temp.inst=this.navParams.get('inst');
    this.temp.img=this.navParams.get('img');

    if(this.temp.name!=null){
      this.contactos.push(this.temp);
    }
  }
  addContact(){
    this.navCtrl.push(this.add);
  }
  viewContact(id: any){
    this.navCtrl.push(this.see,id);
  }

}
