import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likes:[]
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    storeLike: (state, payload) => {
      state.likes.push(payload);
      console.log(state.likes[0].payload);
    }
  },
})

export const { storeLike } = inputSlice.actions

export default inputSlice.reducer