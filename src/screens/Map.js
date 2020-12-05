import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ParkingMarker from "../components/ParkingMarker";
import ParkingModal from "../components/ParkingModal";

export default function Map() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [lotNum, setLotNum] = useState(-1);

  // Used to test random placement of cars
  const genRandCars = () => {
    const cars = [];
    for (let i = 0; i < b.length; i++) {
      cars.push(Math.random() >= 0.5);
    }
    return cars;
  };

  useEffect(async () => {
    const f = require("../components/precompute");
    for (arr of f) {
      console.log(arr);
      setData(arr);
      await delay(1000);
    }
  }, []);

  return (
    <>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 30.622307,
          longitude: -96.34327,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003
        }}
        showsUserLocation
      >
        <Marker
          coordinate={{ latitude: 30.622504, longitude: -96.342386 }}
          onPress={() => setModalOpen(true)}
        >
          <ParkingMarker />
        </Marker>
        <Marker
          coordinate={{ latitude: 30.6094, longitude: -96.341 }}
          onPress={() => setModalOpen(true)}
        >
          <ParkingMarker />
        </Marker>
      </MapView>
      <ParkingModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={data}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
