import React from "react";
import {Grid, Skeleton} from "@mui/material";

const BookListSkeleton: React.FC = () => {
  return (
    <Grid container mt={2} rowSpacing={7} spacing={5} justifyContent={"center"}>
      {[1, 2, 3, 4, 5].map((book) => (
        <Grid item key={book}>
          <Skeleton variant="rectangular" width={290} height={350} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookListSkeleton;
