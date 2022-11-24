import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./CustomModalStyled";

const CustomModal = () => {
  const { showModal, modalText, buttonText } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  return (
    <>
      {showModal && (
        <View style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Text style={styles.modalText}>{modalText}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={closeModal}
                style={styles.button}
                testID={"modalButton"}
              >
                <Text style={styles.buttonText}>{buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CustomModal;