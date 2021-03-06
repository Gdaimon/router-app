import { Component } from "@angular/core";
import { IonicPage, MenuController, NavController, NavParams } from "ionic-angular";
import { Pagina2Page } from "../index.paginas";

/**
 * Generated class for the PrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage ()
@Component ( {
  selector   : "page-principal",
  templateUrl: "principal.html",
} )
export class PrincipalPage {
  
  pagina2 : any = Pagina2Page;
  
  constructor ( public navCtrl : NavController,
                public navParams : NavParams,
                private menuCtrl : MenuController ) {
  }
  
  ionViewDidLoad () {
    console.log ( "ionViewDidLoad PrincipalPage" );
  }
  
  navegarPagina () {
    this.navCtrl.push ( Pagina2Page );
  }
  
  mostarMenu () {
    this.menuCtrl.toggle ();
  }
}
