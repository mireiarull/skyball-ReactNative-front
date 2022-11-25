import React from "react";
import { View, Modal, Image } from "react-native";
import gif from "../../../assets/loading.gif";
import { useAppSelector } from "../../redux/hooks";
import LoadingStyles from "./LoadingStyles";

const Loading = () => {
  const { isLoading } = useAppSelector(({ ui }) => ui);

  return (
    <>
      {isLoading && (
        <Modal
          transparent={true}
          animationType={"none"}
          visible={true}
          style={LoadingStyles.loadingContainer}
          onRequestClose={() => {}}
        >
          <View style={LoadingStyles.activityIndicatorWrapper}>
            <Image
              testID="loading"
              source={gif}
              style={LoadingStyles.gif}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
        </Modal>
      )}
    </>
  );
};

export default Loading;
