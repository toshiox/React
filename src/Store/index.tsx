import Loading from './loading';
import Languages from './Languages';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    Languages,
    Loading
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch