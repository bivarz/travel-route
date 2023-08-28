import React from "react";
import { CustomInput } from "../InputField/index";
import CancelIcon from "../../assets/icons/cancel-icon.svg";
import useAdditionalStops from "../../hooks/useAdditionalStops";
import {
  Container,
  InputArea,
  AddButton,
  SubmitButtonArea,
  SubmitButton,
  RemoveButton,
  FormContent,
  InputSugestions,
  InputWrapper,
} from "./form.styles";
import { transformedArray } from "../../utils/transformDataAppendix";

export const FormComponent = () => {
  const { additionalStops, addStop, removeStop, updateStop } =
    useAdditionalStops([{ id: 1, value: "" }]);

  const handleAddStop = () => {
    if (additionalStops.length === 5) {
      return;
    }
    addStop();
  };

  return (
    <Container>
      <FormContent>
        <CustomInput $fullwidth={true} label="City of origin" />
        {additionalStops.map((stop) => (
          <InputArea key={stop.id}>
            <InputWrapper>
              <CustomInput
                $fullwidth={true}
                label="City of destination"
                value={stop.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateStop(stop.id, e.target.value)
                }
                showClearButton={stop.value !== ""}
                onClear={() => updateStop(stop.id, "")}
              />
              <InputSugestions>
                {transformedArray.map((item, index) => (
                  <button key={index}>
                    {typeof item === "object" ? item.label : item}
                  </button>
                ))}
              </InputSugestions>
            </InputWrapper>
            {additionalStops.length > 1 && (
              <RemoveButton onClick={() => removeStop(stop.id)}>
                <img src={CancelIcon} alt="" />
              </RemoveButton>
            )}
          </InputArea>
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
