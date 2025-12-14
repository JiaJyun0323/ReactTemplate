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
    // formAction({ ...selectedProduct, ...updatedProduct });
    // const modifiedProduct = {
    //   id: selectedProduct.id,
    //   title: queryData.get("title"),
    //   price: queryData.get("price"),
    //   image: queryData.get("image"),
    //   description: queryData.get("description"),
    // };
    const modifiedProduct = {
      ...selectedProduct,
      ...Object.fromEntries(queryData.entries()),
    };
    console.log(modifiedProduct);

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
              defaultValue={selectedProduct.title}
              name="title"
              fullWidth
              margin="normal"
            />
            {/* 改成type=text比較方便 */}
            <TextField
              label="價格"
              type="number"
              defaultValue={selectedProduct.price}
              name="price"
              fullWidth
              margin="normal"
              slotProps={{
                htmlInput: {
                  step: "any",
                  inputMode: "decimal",
                },
              }}
            />
            <TextField
              label="圖片"
              defaultValue={selectedProduct.image}
              name="image"
              fullWidth
              margin="normal"
            />
            <TextField
              label="描述"
              multiline
              rows={4}
              defaultValue={selectedProduct.description}
              name="description"
              fullWidth
              margin="normal"
            />
            {/* 可加上編輯功能 */}
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
