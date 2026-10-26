import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/LoadTheme';
import { Colors } from '../theme/colors';

export default function Footer() {
  const { colors } = useTheme();
  const styles = useMemo(() => criarStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por Diego e Laura.</Text>
      <Text style={styles.text}>Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}

const criarStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: 32,
    },
    text: { color: colors.buttonText, fontSize: 12, textAlign: 'center' },
  });