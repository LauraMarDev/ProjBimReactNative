import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

type Props = { title: string; onPress: () => void };

export default function PrimaryButton({ title, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 0,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  pressed: { opacity: 0.8 },
  text: {
    fontFamily: fonts.subtitle,
    color: colors.buttonText,
    fontSize: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});