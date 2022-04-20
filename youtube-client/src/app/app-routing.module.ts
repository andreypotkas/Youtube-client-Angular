import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LeavePageGuard } from './core/guards/leave-page.guard';
import { CreateCardPageComponent } from './youtube/pages/create-card-page/create-card-page.component';
import { DetailedInfoPageComponent } from './youtube/pages/detailed-info-page/detailed-info.component';
import { NotFoundPageComponent } from './youtube/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'video/:id',
    component: DetailedInfoPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: CreateCardPageComponent,
    canDeactivate: [LeavePageGuard],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
