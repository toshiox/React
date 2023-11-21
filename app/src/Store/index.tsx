import { configureStore } from '@reduxjs/toolkit'
import Languages from './Languages';
import Loading from './loading';
export const store = configureStore({
  reducer: {
    Languages,
    Loading
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch