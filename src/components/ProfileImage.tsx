import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import { colors } from '../theme/colors';

type Props = { source: ImageSourcePropType };

export default function ProfileImage({ source }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.frame} />
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignSelf: 'center', width: '86%', aspectRatio: 1, marginBottom: 24 },
  frame: {
    position: 'absolute',
    top: -8, right: -8, left: 8, bottom: 8,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 20,
  },
  image: { width: '100%', height: '100%', borderRadius: 20 },
});