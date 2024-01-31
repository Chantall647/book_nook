import {useState} from "react";

import {defaultAlertData} from "../../contexts/AlertContext";
import {AlertData} from "../../interfaces/Alert";

export default function useAlertState() {
  const [alertData, setAlertData] = useState<AlertData>(defaultAlertData);

  const showAlert = (parameters: AlertData) => {
    setAlertData({
      ...parameters,
      isAlertOpen: true,
    });
  };
  const closeAlert = () => {
    setAlertData({
      ...alertData,
      isAlertOpen: false,
    });
  };

  return {
    alertData,
    showAlert,
    closeAlert,
  };
}
