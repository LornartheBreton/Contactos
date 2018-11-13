import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {

  }
  addContact(){
    this.navCtrl.push(this.add);
  }
  viewContact(id: any){
    this.navCtrl.push(this.see,id);
  }

}
