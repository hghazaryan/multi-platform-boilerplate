import React from 'react';
import { View } from 'react-sketchapp';
import Label from './Label';
import Palette from './Palette';

const PaletteGroup = ({ title, colors }) => (
  <View style={{ marginBottom: 48, flexDirection: 'row' }}>
    <View style={{ width: 200 }}>
      <Label>{title}</Label>
    </View>
    <View>
      <Palette colors={colors} />
    </View>
  </View>
);

export default PaletteGroup;
