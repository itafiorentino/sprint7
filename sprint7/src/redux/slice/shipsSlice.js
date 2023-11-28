import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchShips = createAsyncThunk("fetchShips", async (page = 1) => {
    try {
        const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
        const data = await response?.json();
        console.log("Fetched Starships Data:", data); // Log the fetched data
        return data;
    } catch (error) {
        console.error("Error fetching starships:", error);
        throw error;
    }
});


const shipsSlice = createSlice({
    name: "ships",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchShips.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchShips.fulfilled, (state, action) => {
      console.log("Action Payload:", action.payload);
      state.isLoading = false;
      state.data = action.payload.results;

     })

     builder.addCase(fetchShips.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

export default shipsSlice.reducer;