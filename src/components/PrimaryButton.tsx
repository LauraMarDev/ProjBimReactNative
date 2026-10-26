import React, { useMemo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/LoadTheme';
import { Colors } from '../theme/colors';

type Props = { title: string; onPress: () => void };

export default function PrimaryButton({ title, onPress }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => criarStyles(colors), [colors]);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const criarStyles = (colors: Colors) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.btnBackground,
      borderRadius: 2,
      paddingVertical: 14,
      alignItems: 'center',
      marginBottom: 12,
    },
    pressed: { opacity: 0.8 },
    text: { color: colors.btnColor, fontSize: 16, fontWeight: '600' },
  });