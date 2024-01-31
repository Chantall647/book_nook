import React, {createContext} from "react";

import ActionAlert from "../components/Alert";
import {AlertContextType, AlertData} from "../interfaces/Alert";
import useAlertState from "../hooks/Alert/useAlertState";

export const defaultAlertData: AlertData = {
  type: "success",
  message: "",
  isAlertOpen: false,
};

export const AlertContext = createContext<AlertContextType>({
  alertData: defaultAlertData,
  showAlert: () => {},
  closeAlert: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AlertProvider = ({children}: Props) => {
  const alertState = useAlertState();

  return (
    <AlertContext.Provider value={alertState}>
      {children}
      <ActionAlert />
    </AlertContext.Provider>
  );
};
