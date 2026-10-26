import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por Alura.</Text>
      <Text style={styles.text}>Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 32,
  },
  text: { color: colors.buttonText, fontSize: 12, textAlign: 'center' },
});