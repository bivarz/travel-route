import React, { useState } from "react";
import { CustomInput } from "../InputField/index";
import CancelIcon from "../../assets/icons/cancel-icon.svg";
import useAdditionalStops from "../hooks/useAdditionalStops";
import {
  Container,
  InputArea,
  AddButton,
  SubmitButtonArea,
  SubmitButton,
  RemoveButton,
  FormContent,
  InputWrapper,
  InputSuggestions,
} from "./form.styles";
import { transformedAppendixA } from "../../utils/transformDataAppendix";

export const FormComponent = () => {
  const { additionalStops, addStop, removeStop, updateStop } =
    useAdditionalStops([
      { id: 1, value: "" },
      { id: 2, value: "" },
    ]);
  const [showSuggestionsCities, setShowSuggestionsCities] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleAddStop = () => {
    if (additionalStops.length === 5) {
      return;
    }
    addStop();
  };

  const filteredArray = transformedAppendixA.filter(
    (item) =>
      typeof item === "object" &&
      item.city.toLowerCase().includes(filterText.toLowerCase())
  );

  const filterCitySuggestions = (filter: string) => {
    const normalizedFilter = filter.toLowerCase().replace(/\s/g, "");
    const filteredArray = transformedAppendixA.filter((item) => {
      if (typeof item === "object") {
        const normalizedLabel = item.city.toLowerCase().replace(/\s/g, "");
        return normalizedLabel.includes(normalizedFilter);
      }
      return false;
    });
    setShowSuggestionsCities(filteredArray.length > 0);
  };

  const handleInputChange = (id: number, value: string) => {
    updateStop(id, value);
    setFilterText(value);
    filterCitySuggestions(value);
  };

  return (
    <Container>
      <FormContent>
        {additionalStops.map((stop) => (
          <InputArea key={stop.id}>
            <InputWrapper>
              <CustomInput
                $fullwidth={true}
                label={stop.id === 1 ? "City of origin" : "City of destination"}
                value={stop.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleInputChange(stop.id, e.target.value);
                }}
                showClearButton={stop.value !== ""}
                onClear={() => updateStop(stop.id, "")}
              />
              {showSuggestionsCities && (
                <InputSuggestions>
                  {filteredArray.map((item, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        updateStop(stop.id, item?.city);
                        setShowSuggestionsCities(false);
                      }}
                    >
                      {typeof item === "object" ? item.city : item}
                    </button>
                  ))}
                </InputSuggestions>
              )}
            </InputWrapper>
            {additionalStops.length > 2 && stop.id !== 1 && (
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
