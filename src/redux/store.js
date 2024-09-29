import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { devtools } from 'globals';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    devtools: process.env.NODE_ENV !== 'production', // треба запитати у ментора чому підкреслює
  },
});
