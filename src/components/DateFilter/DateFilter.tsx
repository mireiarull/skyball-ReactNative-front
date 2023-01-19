import { DateTime } from "luxon";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { addFilterActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import inputStyles from "../../styles/inputStyles";
import { Checkbox } from "../Checkbox/Checkbox";
import createFormStyles from "../CreateForm/CreateFormStyles";
import colorStyles from "../../styles/colorStyles";
import dateFilterStyles from "./DateFilterStyles";
import checkboxStyles from "../Checkbox/CheckboxStyled";

const DateFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const initialFilterState = {
    today: false,
    tomorrow: false,
    other: false,
  };

  const [filter, setFilter] = useState(initialFilterState);
  const [datePicker, setDatePicker] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDateTime = (event: any, selectedDate?: Date) => {
    setShowDatePicker(!showDatePicker);
    setDatePicker(selectedDate ?? datePicker);

    const filterDate = selectedDate?.toISOString().slice(0, 10);
    setFilter({ ...filter, today: false, tomorrow: false });

    dispatch(addFilterActionCreator(filterDate!));
  };

  const handleFilterClick = (date: "today" | "tomorrow") => {
    let filterDate: string;
    setDatePicker(new Date());

    if (date === "today") {
      setFilter({ ...filter, today: true, tomorrow: false });
      filterDate = DateTime.now().toFormat("yyyy-MM-dd");
    } else {
      setFilter({ ...filter, tomorrow: true, today: false });
      filterDate = DateTime.now().plus({ days: 1 }).toFormat("yyyy-MM-dd");
    }

    dispatch(addFilterActionCreator(filterDate!));
  };

  const handleRemoveFilterClick = () => {
    setFilter(initialFilterState);
    dispatch(addFilterActionCreator(""));
  };

  return (
    <View style={dateFilterStyles.container}>
      <Text style={inputStyles.label}>¿Cuándo quieres jugar?</Text>
      <TouchableOpacity onPress={handleRemoveFilterClick}>
        <Text style={dateFilterStyles.text}>Eliminar filtros</Text>
      </TouchableOpacity>
      <View style={createFormStyles.materialCheckboxContainer}>
        <Checkbox
          text="HOY"
          type="button"
          testID="checkboxNet"
          selected={filter.today}
          onPress={() => {
            handleFilterClick("today");
          }}
        />
        <Checkbox
          text="MAÑANA"
          type="button"
          testID="checkboxBall"
          selected={filter.tomorrow}
          onPress={() => {
            handleFilterClick("tomorrow");
          }}
        />
        {Platform.OS === "android" && (
          <TouchableOpacity
            style={checkboxStyles.button}
            onPress={() => {
              setShowDatePicker(!showDatePicker);
            }}
          >
            <Text style={checkboxStyles.text}>OTRO DIA</Text>
          </TouchableOpacity>
        )}
        {showDatePicker && Platform.OS === "android" && (
          <DateTimePicker
            testID="datePicker"
            value={datePicker}
            mode={"date"}
            onChange={onChangeDateTime}
            minimumDate={new Date()}
            display="default"
            locale="es-ES"
          />
        )}
        {Platform.OS === "ios" && (
          <DateTimePicker
            testID="datePicker"
            value={datePicker}
            mode={"date"}
            onChange={onChangeDateTime}
            minimumDate={new Date()}
            display="default"
            locale="es-ES"
            accentColor={colorStyles.main}
            style={dateFilterStyles.dateTimePicker}
          />
        )}
      </View>
    </View>
  );
};

export default DateFilter;
