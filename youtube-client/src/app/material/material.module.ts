import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
];
@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule { }
