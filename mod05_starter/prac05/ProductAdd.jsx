import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/ProductSlice";
import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
  //定義 Yup 驗證 schema
  const schema = Yup.object({
    title: Yup.string().required("名稱必填"),
    price: Yup.number().positive("價格需為正數").required("價格必填"),
    image: Yup.string().url("請輸入有效的圖片網址").required("圖片必填"),
    description: Yup.string().required("描述必填"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (values) => {
    dispatch(addProduct(values)); // 發送 thunk
    navigate("/");
  };

  return (
    <Formik
      initialValues={{ title: "", price: "", image: "", description: "" }}
      validationSchema={schema}
      onSubmit={handlerSubmit}
    >
      {({ errors, touched }) => (
        <Box maxWidth={1000} mx="auto">
          <Typography variant="h4" gutterBottom>
            Add Product
          </Typography>
          {
            <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
              <Form>
                <Field
                  as={TextField}
                  name="title"
                  label="名稱"
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                  fullWidth
                  margin="normal"
                />
                <Field
                  as={TextField}
                  name="price"
                  label="價格"
                  type="number"
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                  fullWidth
                  margin="normal"
                />
                <Field
                  as={TextField}
                  name="image"
                  label="圖片"
                  error={touched.image && Boolean(errors.image)}
                  helperText={touched.image && errors.image}
                  fullWidth
                  margin="normal"
                />
                <Field
                  as={TextField}
                  name="description"
                  label="描述"
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                  新增
                </Button>
              </Form>
            </Paper>
          }
        </Box>
      )}
    </Formik>
  );
}
