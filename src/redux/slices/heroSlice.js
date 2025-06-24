import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchHero = createAsyncThunk(
  'hero/fetchHero',
  async (name) => {
    const res = await axios.get(`/api/superhero`, {
      params: { name }
    });
    return res.data;
  }
)

const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearHeroData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHero.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHero.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHero.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearHeroData } = heroSlice.actions;
export default heroSlice.reducer;

// Getting to know Redux https://chatgpt.com/c/6858fbc7-52d8-8009-ba18-da1118ff1990