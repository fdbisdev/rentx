import React from 'react';
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/loadingCar.json';

import {
  Container,
} from './styles';

export default function LoadAnimation(){
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ height: 150 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}