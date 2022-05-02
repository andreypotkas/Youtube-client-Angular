import { createReducer, on } from '@ngrx/store';
import { addCustomVideo } from '../actions/custom-video.actions';
import { initialAppState } from '../app.state';

export const customVideoReducer = createReducer(
  initialAppState.customVideos,
  on(addCustomVideo, (state, newCustomVideo) => [...state, newCustomVideo]),
);
