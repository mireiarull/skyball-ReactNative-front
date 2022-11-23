import React from "react";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./CustomModalStyled";

const CustomModal = () => {
  const { showModal, modalText } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  return (
    <>
      {showModal && (
        <View style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Text>{modalText}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.button}>
              <Text style={styles.buttonText}>Iniciar sesión!</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default CustomModal;
