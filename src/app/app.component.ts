import { Component } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MenuController, Platform } from "ionic-angular";
import { Ajustes2Page, TabsPage } from "../pages/index.paginas";

@Component ( {
  templateUrl: "app.html"
} )
export class MyApp {
  tabs = TabsPage;
  ajustes2 = Ajustes2Page;
  rootPage : any = TabsPage;
  
  constructor ( platform : Platform, statusBar : StatusBar,
                splashScreen : SplashScreen,
                private menuCtrl : MenuController ) {
    platform.ready ().then ( () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault ();
      splashScreen.hide ();
    } );
  }
  
  abrirPagina ( pagina : any ) {
    this.rootPage = pagina;
    this.menuCtrl.close ();
  }
  
}

