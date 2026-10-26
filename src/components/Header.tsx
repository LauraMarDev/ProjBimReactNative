import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DEV.SPOT</Text>
      <Ionicons name="sparkles-outline" size={34} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 4,
    paddingTop: 16,
    paddingBottom: 24,
  },
  logo: {
    fontFamily: fonts.title,
    color: colors.primary,
    fontSize: 22,
    letterSpacing: 4,
    marginTop: 6,
  },
});