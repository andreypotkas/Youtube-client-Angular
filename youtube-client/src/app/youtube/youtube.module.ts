import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgeStatusDirective } from './directives/age-status.directive';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { SortByWordsPipe } from './pipes/sort-by-words.pipe';
import { MaterialModule } from '../core/material/material.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchResultCardComponent } from './pages/search-result-conatiner/search-result-card/search-result-card.component';
import { SearchResultConatinerComponent } from './pages/search-result-conatiner/search-result-conatiner.component';
import { StatBarComponent } from './pages/search-result-conatiner/stat-bar/stat-bar.component';
import { CreateCardPageComponent } from './pages/create-card-page/create-card-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info.component';
import { CustomCardComponent } from './pages/search-result-conatiner/custom-card/custom-card.component';

@NgModule({
  declarations: [
    CreateCardPageComponent,
    DetailedInfoPageComponent,
    SearchResultCardComponent,
    SearchResultConatinerComponent,
    NotFoundPageComponent,
    StatBarComponent,
    AgeStatusDirective,
    SortByDatePipe,
    SortByViewsPipe,
    SortByWordsPipe,
    CustomCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    YoutubeRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchResultConatinerComponent,
  ],
})
export class YoutubeModule { }
