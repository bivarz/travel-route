export type SelectValueType =
  | string
  | number
  | { label: string; fullName?: string; latitude?: number; longitude?: number };

export type SelectProps = {
  data: SelectValueType[];
};
