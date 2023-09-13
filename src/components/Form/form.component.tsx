import React, { useContext, useState } from "react";
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
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { inputErrorMessages } from "../../utils/errorMessages";

export const FormComponent = () => {
  const { listOfFields } = useContext(GlobalContext);
  const { addStop, removeStop, updateStop, updateSelectedStop } =
    useAdditionalStops();
  const [showSuggestionsCities, setShowSuggestionsCities] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [focusedInputId, setFocusedInputId] = useState<number | null>(null);

  const [errorMessages, setErrorMessages] = useState<Array<string | null>>(
    listOfFields.map(() => null)
  );
  const navigate = useNavigate();

  const handleAddStop = () => {
    if (listOfFields.length === 5) {
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
    filterCitySuggestions(value);
    updateStop(id, value);
    setFilterText(value);
  };

  const handleBlur = (value: string | null, id: number) => {
    if (id === listOfFields?.[id - 1]?.id) {
      if (listOfFields?.[0]?.value === "" && id !== 1) {
        const newErrorMessages = [...errorMessages];
        newErrorMessages[1] = inputErrorMessages.cityOfOrigin;
        setFocusedInputId(id - 1);
        const input = document?.getElementById("1");
        input?.focus();
        setErrorMessages(newErrorMessages);
      } else if (value === null || value === "") {
        if (id === 1) {
          return;
        }
        const newErrorMessages = [...errorMessages];
        newErrorMessages[id] = inputErrorMessages.emptyField;
        setErrorMessages(newErrorMessages);
      } else if (value === ("Fail" || "fail")) {
        const newErrorMessages = [...errorMessages];
        newErrorMessages[id] = inputErrorMessages.searchFail;
        setErrorMessages(newErrorMessages);
      } else if (
        !filteredArray.some(
          (item) => item?.city.toLocaleLowerCase() === value.toLocaleLowerCase()
        )
      ) {
        const newErrorMessages = [...errorMessages];
        newErrorMessages[id] = inputErrorMessages.wordNotMatch;
        setErrorMessages(newErrorMessages);
      } else if (
        listOfFields?.[id - 1]?.value === listOfFields?.[id - 2]?.value
      ) {
        const newErrorMessages = [...errorMessages];
        newErrorMessages[id] = inputErrorMessages.sameCity;
        setErrorMessages(newErrorMessages);
      } else {
        const newErrorMessages = [...errorMessages];
        newErrorMessages[id] = null;
        setErrorMessages(newErrorMessages);
      }
    }
  };

  const handleFocus = (id: number) => {
    setFocusedInputId(id);
    const newErrorMessages = [...errorMessages];
    newErrorMessages[id] = null;
    setErrorMessages(newErrorMessages);
  };

  const handleUpdateCity = (id: number, city: string) => {
    updateSelectedStop(id, city);
    setShowSuggestionsCities(false);
    const input = document?.getElementById(`${id}`);
    input?.focus();
  };

  return (
    <Container>
      <FormContent>
        {listOfFields.map((stop) => (
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
                onFocus={() => handleFocus(stop.id)}
                onBlur={() => handleBlur(stop.value, stop.id)}
                errorMsg={errorMessages[stop.id]?.toString() || null}
                id={`${stop?.id}`}
              />
              {showSuggestionsCities && focusedInputId === stop.id && (
                <InputSuggestions>
                  {filteredArray.map((item, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleUpdateCity(stop?.id, item?.city)}
                    >
                      {typeof item === "object" ? item.city : item}
                    </button>
                  ))}
                </InputSuggestions>
              )}
            </InputWrapper>
            {listOfFields.length > 2 && stop.id !== 1 && (
              <RemoveButton onClick={() => removeStop(stop.id)}>
                <img src={CancelIcon} alt="" />
              </RemoveButton>
            )}
          </InputArea>
        ))}
        {listOfFields.length < 5 && (
          <AddButton onClick={() => handleAddStop()}>Add destination</AddButton>
        )}
      </FormContent>
      <SubmitButtonArea onClick={() => navigate("/travel-route/results")}>
        <SubmitButton disabled={true}>Submit</SubmitButton>
      </SubmitButtonArea>
    </Container>
  );
};
