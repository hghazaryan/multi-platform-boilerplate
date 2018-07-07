import React from 'react';
import { View } from 'react-sketchapp';
import Label from './Label';

const SWATCH_WIDTH = 100;

const Swatch = ({ color, name }) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color,
        borderRadius: 4,
        marginBottom: 8,
      }}
    />
    <Label bold>{name}</Label>
    <Label>{color}</Label>
  </View>
);

export default Swatch;
