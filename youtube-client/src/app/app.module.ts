import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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
import { MaterialModule } from './material/material.module';
import { StatBarComponent } from './search-result-conatiner/stat-bar/stat-bar.component';

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
    StatBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
