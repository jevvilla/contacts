import React from 'react';
import {StyleSheet, Platform, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

const image = require('../../../assets/images/fav_true.png');

export function FavoriteStar() {
  if (Platform.OS === 'android') {
    return <Image source={image} style={styles.star} />;
  }

  return <FastImage defaultSource={image} style={styles.star} />;
}

const styles = StyleSheet.create({
  star: {
    width: 22,
    height: 22,
  },
});
