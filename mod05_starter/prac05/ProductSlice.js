import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// 新增商品
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data; // fakestoreapi 會回傳新增的商品
  }
);

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
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.value.push(action.payload); // 把新商品加到陣列裡
      });
  },
});

export default productsSlice.reducer;
