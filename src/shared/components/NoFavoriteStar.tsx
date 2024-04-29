import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export function NoFavoriteStar() {
  const image = require('../../../assets/images/fav_false.png');

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
