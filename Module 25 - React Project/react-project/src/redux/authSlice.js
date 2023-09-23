import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn:false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state) => {
        state.isLoggedIn=true;
    },
    authLogout: (state) => {
        state.isLoggedIn=false;
    },
  },
})

export const { authLogin, authLogout } = authSlice.actions

export default authSlice.reducer