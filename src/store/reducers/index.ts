import { combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;