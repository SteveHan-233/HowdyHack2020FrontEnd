import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ParkingMarker from "./src/components/ParkingMarker";
import { StatusBar } from "expo-status-bar";
import ParkingModal from "./src/components/ParkingModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "#500000" }}>
      <StatusBar style="light" />
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 30.622307,
          longitude: -96.34327,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
      >
        <Marker
          coordinate={{ latitude: 30.622504, longitude: -96.342386 }}
          onPress={() => setModalOpen(true)}
        >
          <ParkingMarker />
        </Marker>
      </MapView>
      <ParkingModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
