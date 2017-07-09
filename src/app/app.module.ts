import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import {
  Ajustes2Page,
  AjustesPage,
  ModalPage,
  Pagina2Page,
  Pagina3Page,
  PrincipalPage,
  TabsPage
} from "../pages/index.paginas";

import { MyApp } from "./app.component";

@NgModule ( {
  declarations   : [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage
  ],
  imports        : [
    BrowserModule,
    IonicModule.forRoot ( MyApp, { backButtonText: "Ir Atras" } )
  
  ],
  bootstrap      : [ IonicApp ],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage
  ],
  providers      : [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
} )
export class AppModule {
}
