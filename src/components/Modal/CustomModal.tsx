import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./CustomModalStyles";

const CustomModal = () => {
  const { showModal, modalText, buttonText, modalTitle, isError } =
    useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  return (
    <>
      {showModal && (
        <View style={styles.backgroundContainer}>
          <View style={styles.container}>
            {isError && (
              <View style={styles.alertSign}>
                <Text style={styles.alertSignText}>!</Text>
              </View>
            )}
            <Text style={styles.modalTitle}>{modalTitle}</Text>
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
