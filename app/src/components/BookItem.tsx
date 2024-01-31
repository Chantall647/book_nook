import React from "react";
import {useNavigate} from "react-router-dom";
import {Paper, Button, ButtonGroup, Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";

import {BookItemProps} from "../interfaces/Book";
import {ROUTES} from "../Routes";

const BookItem: React.FC<BookItemProps> = ({book, handleDeleteBook}) => {
  const navigate = useNavigate();

  const handleEditBook = () => {
    navigate(`/${ROUTES.EDIT_BOOK.replace(":id", book.id)}`, {
      state: {book},
    });
  };

  return (
    <StyledPaper elevation={20}>
      <TextWrapper>
        <StyledTypography variant="h6">{book.title}</StyledTypography>
        <StyledTypography variant="subtitle1" color="textSecondary">
          {book.author}
        </StyledTypography>
        <StyledTypography variant="caption" color="textSecondary">
          Genre: {book.genre}
        </StyledTypography>
        <StyledDescription variant="body2" color="textSecondary" mt={2}>
          {book.description}
        </StyledDescription>
      </TextWrapper>
      <StyledBoxWrapper>
        <StyledBox>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size={"small"}
          >
            <Button onClick={handleEditBook}>Edit</Button>
            <Button onClick={() => handleDeleteBook(book.id)}>Delete</Button>
          </ButtonGroup>
        </StyledBox>
      </StyledBoxWrapper>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)(() => ({
  padding: "16px",
  width: "250px",
  height: "350px",
  borderLeft: "30px solid #3E3232",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *": {
    m: 1,
  },
}));

const StyledBoxWrapper = styled(Box)(() => ({
  alignSelf: "flex-end",
}));

const TextWrapper = styled(Box)(() => ({
  wordWrap: "break-word",
}));

const StyledDescription = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 7,
}));

const StyledTypography = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
}));

export default BookItem;
