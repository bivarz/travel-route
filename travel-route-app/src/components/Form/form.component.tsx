import { useState } from "react";
import { CustomInput } from "../InputField/index";
import CancelIcon from "../../assets/icons/cancel-icon.svg";

import {
  AddButton,
  Container,
  RemoveButton,
  FormContent,
  InputArea,
  SubmitButtonArea,
  SubmitButton,
} from "./form.styles";

interface AdditionalStops {
  id: number;
  value: string;
}

export const FormComponent = () => {
  const [additionalStops, setAdditionalStops] = useState<AdditionalStops[]>([
    { id: 1, value: "" },
  ]);

  const handleAddStop = () => {
    if (additionalStops.length === 5) {
      return;
    }
    const newId =
      additionalStops.length > 0
        ? additionalStops[additionalStops.length - 1].id + 1
        : 0;
    setAdditionalStops([...additionalStops, { id: newId, value: "" }]);
  };

  const handleRemoveStop = (index: number) => {
    const newStops = additionalStops.filter((stop) => stop.id !== index);
    setAdditionalStops(newStops);
  };

  const handleChange = (index: number, value: string) => {
    const newStops = additionalStops.map((stop) =>
      stop.id === index ? { ...stop, value } : stop
    );
    setAdditionalStops(newStops);
  };

  return (
    <Container>
      <FormContent>
        <CustomInput
          fullWidth={true}
          label="City of origin"
          // errorMsg="You must choose the city of origin"
        />
        {additionalStops.map((stop) => (
          <>
            <InputArea key={stop.id}>
              <CustomInput
                fullWidth={true}
                key={stop.id}
                label="City of destination"
                // errorMsg="You must choose the city of origin"
                value={stop.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(stop.id, e.target.value)
                }
              />
              {additionalStops.length > 1 && (
                <RemoveButton onClick={() => handleRemoveStop(stop.id)}>
                  <img src={CancelIcon} alt="" />
                </RemoveButton>
              )}
            </InputArea>
          </>
        ))}
        {additionalStops.length < 5 && (
          <AddButton onClick={() => handleAddStop()}>Add destination</AddButton>
        )}
      </FormContent>
      <SubmitButtonArea>
        <SubmitButton disabled={true}>Submit</SubmitButton>
      </SubmitButtonArea>
    </Container>
  );
};
