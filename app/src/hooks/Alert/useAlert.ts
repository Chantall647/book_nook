import {useContext} from "react";

import {AlertContext} from "../../contexts/AlertContext";
import {AlertContextType} from "../../interfaces/Alert";

export function useAlert() {
  const context: AlertContextType = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlerts must be used within an AlertsContext Provider");
  }
  return context;
}

export default useAlert;
