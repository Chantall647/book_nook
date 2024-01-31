export interface AlertContextType {
  alertData: AlertData;
  showAlert: (parameters: AlertData) => void;
  closeAlert: () => void;
}

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertData {
  type: AlertType;
  message: string;
  isAlertOpen: boolean;
}
