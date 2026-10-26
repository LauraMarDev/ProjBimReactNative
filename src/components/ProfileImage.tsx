import React, { useMemo } from 'react';
import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { useTheme } from '../theme/LoadTheme';
import { Colors } from '../theme/colors';

type Props = { source: ImageSourcePropType };

export default function ProfileImage({ source }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => criarStyles(colors), [colors]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.frame} />
      <Image source={source} style={styles.image} />
    </View>
  );
}

const criarStyles = (colors: Colors) =>
  StyleSheet.create({
    wrapper: { alignSelf: 'center', width: '86%', aspectRatio: 1, marginBottom: 24 },
    frame: {
      position: 'absolute',
      top: -8,
      right: -8,
      left: 8,
      bottom: 8,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 20,
    },
    image: { width: '100%', height: '100%', borderRadius: 20 },
  });