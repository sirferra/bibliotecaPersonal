import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface CodeState {
    codeSent: boolean;
}
const initialState: CodeState = {
    codeSent: false
}
export const codeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        setCodeSent: (state, action: PayloadAction<boolean>) => {
            state.codeSent = action.payload
        }
    }
})
export const { setCodeSent } = codeSlice.actions
export default codeSlice.reducer;