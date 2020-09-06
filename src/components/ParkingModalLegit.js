import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Modal, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import socket from 'socket.io-client';

const carPos = [
  { top: 388, left: 75 },
  { top: 354, left: 75 },
  { top: 320, left: 75 },
  { top: 286, left: 75 },
  { top: 252, left: 75 },
  { top: 218, left: 75 },
  { top: 184, left: 75 },
  { top: 150, left: 75 },
  { top: 116, left: 75 },
  { top: 82, left: 75 },
  { top: 82, left: 210 },
  { top: 116, left: 210 },
  { top: 150, left: 210 },
  { top: 184, left: 210 },
  { top: 218, left: 210 },
  { top: 252, left: 210 },
  { top: 286, left: 210 },
  { top: 320, left: 210 },
  { top: 354, left: 210 },
  { top: 388, left: 210 },
  { top: 422, left: 210 },
  { top: 456, left: 210 },
  { top: 490, left: 275 },
  { top: 456, left: 275 },
  { top: 422, left: 275 },
  { top: 388, left: 275 },
  { top: 354, left: 275 },
  { top: 320, left: 275 },
  { top: 286, left: 275 },
  { top: 252, left: 275 },
  { top: 218, left: 275 },
  { top: 184, left: 275 },
  { top: 150, left: 275 },
  { top: 116, left: 275 },
  { top: 82, left: 275 },
];

// Used to test random placement of cars
// const genRandCars = () => {
//   const cars = [];
//   for (let i = 0; i < carPos.length; i++) {
//     cars.push(Math.random() >= 0.5);
//   }
//   return cars;
// };

const ENDPOINT = 'http://0b69ff344362.ngrok.io';

export default ({ modalOpen, setModalOpen }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const s = socket(ENDPOINT);
    s.on('frame', (data) => {
      setCars(data);
    });

    return () => s.disconnect();
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
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
        <Image source={require('../../assets/lot1.png')} style={styles.lot} />
        {cars.map((car, ind) => {
          if (car)
            return (
              <Image
                source={require('../../assets/car-top.png')}
                style={{ ...styles.car, ...carPos[ind] }}
                key={ind}
              />
            );
          else return <></>;
        })}
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
    height: '70%',
    borderRadius: 50,
    padding: 25,
  },
  icon: {
    marginLeft: 'auto',
  },
  lot: {
    height: '80%',
    width: '100%',
    resizeMode: 'contain',
    marginTop: 20,
    position: 'relative',
  },
  car: {
    position: 'absolute',
    height: 30,
    width: 60,
  },
});
