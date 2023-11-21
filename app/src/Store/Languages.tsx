import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface ILanguages {
    value:string;
}
const initialState: ILanguages = {
    value: "en"
};
const languagesInfo = {
    getLanguage: (state: RootState) => {
        return state;
    }
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      setLanguage: (state, action: PayloadAction<ILanguages>) => {
        state.value = action.payload.value;
      },
    },
  });
  export { languagesInfo };
  export const languageActions = languageSlice.actions;
  export default languageSlice.reducer;