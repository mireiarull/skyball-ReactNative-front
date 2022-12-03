import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { type Pagination } from "../../redux/features/uiSlice/types";
import { goToNextPageActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import loadMoreStyles from "./LoadMoreStyles";

interface LoadMoreProps {
  pagination: Pagination;
}

const LoadMore = ({
  pagination: { currentPage, totalPages },
}: LoadMoreProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const disabledButton = currentPage === totalPages;

  const handleClick = () => {
    if (disabledButton) {
      return;
    }

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
