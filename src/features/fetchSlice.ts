import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..//app/store';

export const fetchGetData = createAsyncThunk('fetch/get', async () => {
  const res = await axios.get<any>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return res.data;
});

const initialState = {
  data: [],
};

export const fetchSlice = createSlice({
  name: 'fetch',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
  },
});

export const selectData = (state: RootState) => state.fetch.data;

export default fetchSlice.reducer;
