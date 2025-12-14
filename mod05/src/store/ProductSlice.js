import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload; // 把 API 資料存進來
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },

});

// thunk: 發 API 取得產品清單
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    //模擬等待2秒
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data; // 這裡回傳的 data 會進到 extraReducers
  }
);


export default productsSlice.reducer;
