import React, {useState, useEffect} from "react";
import {styled} from "@mui/material/styles";
import {Fab} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFab
      aria-label="scroll-to-top"
      size="medium"
      isVisible={isVisible}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon
        sx={{
          color: "white",
        }}
      />
    </StyledFab>
  );
};

const StyledFab = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "isVisible",
})<{isVisible: boolean}>(({isVisible}) => ({
  position: "fixed",
  bottom: 16,
  right: 16,
  transition: "visibility 0.3s",
  backgroundColor: "#637A9F",
  "&:hover": {
    backgroundColor: "#9ba6cf",
  },
  visibility: isVisible ? "visible" : "hidden",
}));

export default ScrollToTopButton;
