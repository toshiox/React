import { configureStore } from '@reduxjs/toolkit'
import Languages from './Languages';
export const store = configureStore({
  reducer: {
    Languages
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch