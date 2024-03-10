import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark'
}

export const darkSlice = createSlice({
  name: "globalColor",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
})

export const { setMode } = darkSlice.actions
export default darkSlice.reducer