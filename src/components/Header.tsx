import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/LoadTheme';
import { Colors } from '../theme/colors';

export default function Header() {
  const { colors } = useTheme();
  const styles = useMemo(() => criarStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DEV.SPOT</Text>
      <Ionicons name="sparkles-outline" size={34} color={colors.primary} />
    </View>
  );
}

const criarStyles = (colors: Colors) => StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 4,
      paddingTop: 16,
      paddingBottom: 24,
    },
    logo: {
      color: colors.text,
      fontSize: 22,
      fontWeight: '700',
      letterSpacing: 1,
      marginTop: 6,
    },
});