import { ChangeEventHandler } from "react";

export interface CustomInputTypes {
  label: string;
  errorMsg?: string;
  index?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  className?: string;
  key?: number | string;
  $fullwidth: boolean;
  type?: string;
  showClearButton?: boolean;
  onClear?: () => void;
}
