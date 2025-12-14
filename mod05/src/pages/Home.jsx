import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { fetchProducts } from "../store/ProductSlice";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const products = useSelector((state) => state.products.value);

  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading")
    return (
      <p>
        <CircularProgress /> 載入中...
      </p>
    );
  if (status === "failed") return <p>載入失敗</p>;

  return (
    <>
      <h1>Product List : {products && products.length}</h1>
      {/* 卡片排版：一列3個 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {products &&
          products.map((product) => (
            <Card sx={{ maxWidth: 240 }} key={product.id}>
              <CardHeader
                title={product.title}
                subheader={`$${product.price}`}
              />

              <CardMedia component="img" height="194" image={product.image} />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
