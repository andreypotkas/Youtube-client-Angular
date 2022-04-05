import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CreateCardFormComponent } from './pages/create-card-form/create-card-form.component';
import { AgeStatusDirective } from './directives/age-status.directive';
import { SearchResultCardComponent } from './search-result-conatiner/search-result-card/search-result-card.component';
import { SearchResultConatinerComponent } from './search-result-conatiner/search-result-conatiner.component';
import { StatBarComponent } from './search-result-conatiner/stat-bar/stat-bar.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { SortByWordsPipe } from './pipes/sort-by-words.pipe';
import { MaterialModule } from '../core/material/material.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    CardPageComponent,
    CreateCardFormComponent,
    AgeStatusDirective,
    SearchResultCardComponent,
    SearchResultConatinerComponent,
    StatBarComponent,
    SortByDatePipe,
    SortByViewsPipe,
    SortByWordsPipe,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    YoutubeRoutingModule,
  ],
  exports: [
    SearchResultConatinerComponent,
  ],
})
export class YoutubeModule { }
