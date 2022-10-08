import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BreadcrumbComponent} from "../components/breadcrumb/breadcrumb.component";
import {HeaderComponent} from "../components/header/header.component";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faMoneyBill, faWallet, faCalendar, faCreditCard, faList, faCheck, faTimes, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        AppComponent,
        BreadcrumbComponent,
        HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faMoneyBill, faWallet, faCalendar, faCreditCard, faList, faCheck, faTimes, faCaretLeft, faCaretRight);
  }
}
