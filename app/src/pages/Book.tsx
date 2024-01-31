import React, {useMemo} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {styled} from "@mui/material/styles";
import {Button, Grid, Typography, ButtonGroup, IconButton} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import {updateBook} from "../api/updateBook";
import {addBook} from "../api/addBook";

import useAlert from "../hooks/Alert/useAlert";

import InputField from "../components/InputField";
import {Book as BookProps} from "../interfaces/Book";
import {ROUTES} from "../Routes";

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  genre: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const Book: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {showAlert} = useAlert();

  const {id, title, genre, author, description} = location?.state?.book || {};

  const formik = useFormik({
    initialValues: {
      title: title || "",
      author: author || "",
      genre: genre || "",
      description: description || "",
      id: id || "",
    },
    validationSchema: BookSchema,
    validateOnMount: true,
    onSubmit: async (book: BookProps) => {
      try {
        if (id) {
          await updateBook(book);
          showAlert({
            type: "success",
            message: "Book updated successfully.",
            isAlertOpen: true,
          });
        } else {
          await addBook(book);
          showAlert({
            type: "success",
            message: "Book added successfully.",
            isAlertOpen: true,
          });
        }
        navigate(`/${ROUTES.BOOKS}`);
      } catch (error) {
        showAlert({
          type: "error",
          message: "Something went wrong.",
          isAlertOpen: true,
        });
      }
    },
  });

  const handleGoBack = () => {
    navigate(`/${ROUTES.BOOKS}`);
  };

  const handleCancel = () => {
    navigate(`/${ROUTES.BOOKS}`);
  };

  const buttonDisabled = useMemo(() => {
    if (id) {
      return !formik.isValid || !formik.dirty;
    } else {
      return !formik.isValid;
    }
  }, [formik.isValid, formik.dirty, id]);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item alignSelf={"center"} xs={5}>
        <Grid
          direction={"row"}
          container
          alignItems={"center"}
          spacing={2}
          mt={2}
          mb={2}
        >
          <Grid item>
            <StyledIconButton
              aria-label="back"
              size="small"
              onClick={handleGoBack}
            >
              <StyledIcon />
            </StyledIconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" mt={2} mb={2} color={"grey"}>
              {id ? "Edit book" : "Add book"}
            </Typography>
          </Grid>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction={"column"} spacing={3}>
            <Grid item xs={4}>
              <InputField
                id="title"
                name="title"
                label="Title"
                size="small"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                id="author"
                name="author"
                label="Author"
                size="small"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                id="genre"
                name="genre"
                label="Genre"
                size="small"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={4}>
              <InputField
                multiline
                size="medium"
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={4}>
              <Grid
                container
                sx={{
                  justifyContent: "flex-end",
                }}
              >
                <ButtonGroup variant="text" size={"small"}>
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button type={"submit"} disabled={buttonDisabled}>
                    Save
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: "#637A9F",
  "&:hover": {
    backgroundColor: "#9ba6cf",
  },
}));

const StyledIcon = styled(KeyboardArrowLeftIcon)(() => ({
  color: "white",
}));

export default Book;
