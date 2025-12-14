import React from "react";
import { useActionState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../store/ProductSlice";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

export default function ProductEdit() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.value);
  const selectedProduct = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editProductAction = (prevState, queryData) => {
    const modifiedProduct = {
      ...selectedProduct,
      ...Object.fromEntries(queryData.entries()),
    };
    dispatch(updateProduct(modifiedProduct));
    navigate("/");
  };
  const [formState, formAction] = useActionState(editProductAction, null);

  return (
    <Box maxWidth={1000} mx="auto">
      <Typography variant="h4" gutterBottom>
        Edit Product
      </Typography>
      {selectedProduct ? (
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <form action={formAction}>
            <TextField
              label="名稱"
              name="title"
              fullWidth
              margin="normal"
              defaultValue={selectedProduct.title}
            />
            <TextField
              label="價格"
              type="number"
              name="price"
              fullWidth
              margin="normal"
              defaultValue={selectedProduct.price}
              slotProps={{
                htmlInput: {
                  step: "any",
                  inputMode: "decimal",
                },
              }}
            />
            <TextField
              label="圖片"
              name="image"
              fullWidth
              margin="normal"
              defaultValue={selectedProduct.image}
            />

            <TextField
              label="描述"
              multiline
              rows={4}
              name="description"
              fullWidth
              margin="normal"
              defaultValue={selectedProduct.description}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              type="submit"
            >
              儲存
            </Button>
          </form>
        </Paper>
      ) : (
        <Typography color="error">查無此產品</Typography>
      )}
    </Box>
  );
}
