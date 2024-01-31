import React from "react";
import {useNavigate, Outlet, useLocation} from "react-router-dom";
import {AppBar, Typography, Box, Button} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddIcon from "@mui/icons-material/Add";
import {styled} from "@mui/material/styles";

import {ROUTES} from "../Routes";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddBook = () => {
    navigate(`/${ROUTES.ADD_BOOK}`);
  };

  return (
    <React.Fragment>
      <StyledAppBar position="static">
        <StyledBox>
          <StyledTitle variant="h6">BookNook</StyledTitle>
          <AutoStoriesIcon />
        </StyledBox>
        {location.pathname !== `/${ROUTES.ADD_BOOK}` ? (
          <StyledButton
            size="small"
            variant="outlined"
            color="inherit"
            onClick={handleAddBook}
          >
            <StyledAddIcon />
            <StyledAddText variant="body1">Add book</StyledAddText>
          </StyledButton>
        ) : null}
      </StyledAppBar>
      <Outlet />
    </React.Fragment>
  );
};

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#637A9F",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "20px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const StyledTitle = styled(Typography)(() => ({
  marginRight: "5px",
}));

const StyledButton = styled(Button)(() => ({
  color: "white",
}));

const StyledAddIcon = styled(AddIcon)(() => ({
  marginRight: "5px",
}));

const StyledAddText = styled(Typography)(() => ({
  textTransform: "none",
}));

export default Header;
