import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, NavParams } from "ionic-angular";
import { ModalPage } from "../modal/modal";

@IonicPage ()
@Component ( {
  selector   : "page-ajustes",
  templateUrl: "ajustes.html",
} )
export class AjustesPage {
  
  
  constructor ( public navCtrl : NavController,
                public navParams : NavParams,
                public modalCtrl : ModalController ) {
  }
  
  activarPrincipal () {
    this.navCtrl.parent.select ( 2 );
  }
  
  mostrarModal () {
    let modal = this.modalCtrl.create ( ModalPage, { nombre: "Carlos", edad: 32 } );
    
    modal.present ();
    modal.onDidDismiss ( parametros => {
      if ( parametros ) {
        console.log ( "Datos del modal", parametros );
      }
      console.log ( "Sin parametros" );
    } );
  }
}
