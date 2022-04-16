import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultConatinerComponent } from './pages/search-result-conatiner/search-result-conatiner.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultConatinerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule { }
