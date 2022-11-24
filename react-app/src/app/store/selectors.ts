import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectDomain = (state) => state.main || initialState;

export const selectToken = createSelector(
  [selectDomain],
  state => state.token,
);

export const selectUserDetails = createSelector(
  [selectDomain],
  state => state.userDetails,
);

export const selectProjectsInfo = createSelector(
  [selectDomain],
  state => state.projectsInfo,
);

export const selectServerErrorMessage = createSelector(
  [selectDomain],
  state => state.serverErrorMessage,
);