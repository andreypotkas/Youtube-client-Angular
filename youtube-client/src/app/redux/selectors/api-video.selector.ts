import { createFeatureSelector } from '@ngrx/store';
import { IItem } from '../../core/models/models';

export const selectApiVideos = createFeatureSelector<IItem[]>('apiVideos');
