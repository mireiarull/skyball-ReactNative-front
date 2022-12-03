import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { goToNextPageActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import loadMoreStyles from "./LoadMoreStyles";

const LoadMore = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(goToNextPageActionCreator());
  };

  return (
    <View>
      <TouchableOpacity onPress={handleClick} style={loadMoreStyles.button}>
        <Text style={loadMoreStyles.buttonText}>VER MÁS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadMore;
