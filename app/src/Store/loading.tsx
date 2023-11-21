import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface ILoading {
    isLoading:boolean;
}
const initialState: ILoading = {
    isLoading: true
};
const loadingInfo = {
    getLoading: (state: RootState) => {
        return state;
    }
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
      setLoading: (state, action: PayloadAction<ILoading>) => {
        state.isLoading = action.payload.isLoading;
      },
    },
  });
  export { loadingInfo };
  export const loadingActions = loadingSlice.actions;
  export default loadingSlice.reducer;