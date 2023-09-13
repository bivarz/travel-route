export const setInputFocusById = (id: number) => {
  const input = document?.getElementById(`${id}`);
  return input?.focus();
};
