type InputSize = "small" | "medium";

export interface InputProps {
  id: string;
  name: string;
  label: string;
  size: InputSize;
  multiline?: boolean;
  fullWidth?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
