import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICustomVideo } from '../app.state';

export const selectCustomVideos = createFeatureSelector<ICustomVideo[]>('customVideos');
