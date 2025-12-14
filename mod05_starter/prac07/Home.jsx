import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../store/ProductSlice";
import { CircularProgress } from "@mui/material";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ConfirmDialog from "../components/ConfirmDialog";

export default function Home() {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);

  //------------------------------------ 刪除功能 ----------------------
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  //----------------------------------------------------------

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      console.log("觸發 fetchProducts");
    }
  }, [status, dispatch]);

  if (status === "loading")
    return (
      <p>
        <CircularProgress />
        載入中...
      </p>
    );
  if (status === "failed") return <p>載入失敗</p>;

  //------------------------------------ 刪除功能 ----------------------
  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    dispatch(deleteProduct(selectedProduct.id));
    setOpen(false);
  };
  //----------------------------------------------------------

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddCircle />}
        to="/Product/Add"
        component={Link}
      >
        Add New Product
      </Button>

      <h1>Product List : {products && products.length}</h1>
      {/* 卡片排版：一列3個 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {products &&
          products.map((product) => (
            <Card sx={{ maxWidth: 240 }} key={product.id}>
              <CardHeader
                component={Link}
                to={`/Product/Edit/${product.id}`}
                title={product.title}
                subheader={`$${product.price}`}
              />
              <CardMedia component="img" height="194" image={product.image} />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleClickOpen(product)}
                >
                  刪除
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>

      <ConfirmDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={"刪除確認"}
        content={
          "確定要刪除這個產品嗎？" + (selectedProduct && selectedProduct.title)
        }
      />
    </>
  );
}
