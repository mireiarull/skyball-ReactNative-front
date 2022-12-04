import { DateTime } from "luxon";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text, TouchableOpacity, View } from "react-native";
import { addFilterActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import inputStyles from "../../styles/inputStyles";
import { Checkbox } from "../Checkbox/Checkbox";
import createFormStyles from "../CreateForm/CreateFormStyles";

const DateFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const initialFilterState = {
    today: false,
    tomorrow: false,
    other: false,
  };

  const [filter, setFilter] = useState(initialFilterState);
  const [datePicker, setDatePicker] = useState(new Date());

  const onChangeDateTime = (event, selectedDate?: Date) => {
    setDatePicker(selectedDate ?? datePicker);

    const filterDate = selectedDate?.toISOString().slice(0, 10);
    setFilter({ ...filter, other: true });

    dispatch(addFilterActionCreator(filterDate!));
  };

  const handleFilterClick = (date: string) => {
    let filterDate: string;

    if (date === "today") {
      setFilter({ ...filter, today: true, tomorrow: false });
      filterDate = DateTime.now().toFormat("yyyy-MM-dd");
    } else if (date === "tomorrow") {
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
    <>
      <Text style={inputStyles.label}>¿Cuándo quieres jugar?</Text>
      <TouchableOpacity onPress={handleRemoveFilterClick}>
        <Text>Eliminar filtros</Text>
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
        <DateTimePicker
          testID="datePicker"
          value={datePicker}
          mode={"date"}
          onChange={onChangeDateTime}
          minimumDate={new Date()}
          locale="es-ES"
        />
      </View>
    </>
  );
};

export default DateFilter;
