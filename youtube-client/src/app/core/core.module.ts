import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SortBarComponent } from './header/sort-bar/sort-bar.component';
import { MaterialModule } from './material/material.module';
import { YoutubeInterceptor } from './interceptors/youtube.interceptor';
import { UserBarComponent } from './header/user-bar/user-bar.component';
import { customVideoReducer } from '../redux/reducers/custom-video.reducer';
import { ApiVideoListReducer } from '../redux/reducers/api-videos.reducer';

@NgModule({
  declarations: [
    HeaderComponent,
    SortBarComponent,
    UserBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ customVideos: customVideoReducer, apiVideos: ApiVideoListReducer }),
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true }],
})
export class CoreModule {}
