import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//user
const initialState = {
    user: null, 
    isSuccess: false,
    isLoading: false,
};


export const LoginUser = createAsyncThunk('/Register', async(user, thunkAPI) => {
    const response = await axios.post('http://localhost:3000/', {
            email: user.email,
            password: user.password
        })
        return response.data;
});

export const getMe = createAsyncThunk('user/getMe', async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) =>{
        builder.addCase(LoginUser.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });

        //Get User Login
        builder.addCase(getMe.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
    }
    
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;
