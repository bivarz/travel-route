import { ChangeEventHandler } from "react";

export interface CustomInputTypes {
  label: string;
  errorMsg?: string | null;
  index?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  className?: string;
  key?: number | string;
  $fullwidth: boolean;
  type?: string;
  showClearButton?: boolean;
  onClear?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  readOnly?: boolean;
}
