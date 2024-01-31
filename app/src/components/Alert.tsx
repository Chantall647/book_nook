import React from "react";
import {Alert, Snackbar} from "@mui/material";

import {useAlert} from "../hooks/Alert/useAlert";

const ActionAlert: React.FC = () => {
  const {alertData, closeAlert} = useAlert();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={alertData.isAlertOpen}
      autoHideDuration={1000}
      onClose={closeAlert}
    >
      <Alert severity={alertData.type} onClose={closeAlert}>
        {alertData.message}
      </Alert>
    </Snackbar>
  );
};

export default ActionAlert;
