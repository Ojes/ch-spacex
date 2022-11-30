import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state;

export const isFavorite = createSelector(selectSelf, (id) => (state) => id in state.favorites);
