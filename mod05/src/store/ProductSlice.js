import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.value.findIndex((p) => p.id === updatedProduct.id);
        if (index !== -1) {
          // 更新已有的商品
          state.value.splice(index, 1, updatedProduct);
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.value = state.value.filter((p) => p.id !== action.payload);
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

// 新增商品
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data; // fakestoreapi 會回傳新增的商品
  }
);

// 更新商品
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const updated = await response.json();
    return updated; // 回傳更新後的商品
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    return id; // 回傳要刪除的產品 id
  }
);

export default productsSlice.reducer;
