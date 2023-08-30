export type SelectValueType =
  | string
  | number
  | { label: string; fullName?: string };

export type SelectProps = {
  data: SelectValueType[];
  handleClick: (value: string, index: number) => void;
};
