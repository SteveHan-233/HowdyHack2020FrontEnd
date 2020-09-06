import React from "react";
import { StyleSheet, Image, View, Modal, Text } from "react-native";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const carPos = [{ top: 82, left: 75 }];

export default ({ modalOpen, setModalOpen }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
      style={styles.modal}
    >
      <BlurView tint="light" intensity={100} style={styles.blur}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setModalOpen(false)}
        >
          <Ionicons name="ios-close-circle" size={30} color="#500000" />
        </TouchableOpacity>
        <Image source={require("../../assets/lot1.png")} style={styles.lot} />
        <Image
          source={require("../../assets/car-top.png")}
          style={styles.car}
        />
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: 50,
  },
  blur: {
    marginTop: 280,
    height: "70%",
    borderRadius: 50,
    padding: 25,
  },
  icon: {
    marginLeft: "auto",
  },
  lot: {
    height: "80%",
    width: "100%",
    resizeMode: "contain",
    marginTop: 20,
    position: "relative",
  },
  car: {
    position: "absolute",
    top: 116,
    left: 75,
    height: 30,
    width: 60,
  },
});
