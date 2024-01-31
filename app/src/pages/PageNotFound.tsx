import React from "react";
import {Grid, Typography} from "@mui/material";

const PageNotFound: React.FC = () => {
  return (
    <Grid container mt={7} direction={"column"} alignContent={"center"}>
      <Grid item xs={12} mb={2}>
        <Typography variant={"h5"} color={"grey"}>
          Page not found.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
