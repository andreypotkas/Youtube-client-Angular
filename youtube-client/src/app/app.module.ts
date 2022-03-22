import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultConatinerComponent } from './search-result-conatiner/search-result-conatiner.component';
import { SearchResultCardComponent } from './search-result-conatiner/search-result-card/search-result-card.component';
import { SortBarComponent } from './header/sort-bar/sort-bar.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { CardPageComponent } from './card-page/card-page.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultConatinerComponent,
    SearchResultCardComponent,
    SortBarComponent,
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent,
    CardPageComponent,
    CreateCardFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
