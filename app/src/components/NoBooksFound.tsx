import React from "react";
import {Grid, Typography} from "@mui/material";

import {NoBooksFoundProps} from "../interfaces/Book";

const NoBooksFound: React.FC<NoBooksFoundProps> = ({message}) => {
  return (
    <Grid container mt={7} direction={"column"} alignContent={"center"}>
      <Grid item xs={12} mb={2}>
        <Typography variant={"h5"} color={"grey"}>
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoBooksFound;
