import React from 'react';
import { Pressable, Text, Linking, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type Props = {
  icon: keyof typeof Ionicons.glyphMap; // só aceita nomes de ícones que existem
  label: string;
  url: string;
};

export default function SocialButton({ icon, label, url }: Props) {
  const abrir = async () => {
    try {
      await Linking.openURL(url);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível abrir o link.');
    }
  };

  return (
    <Pressable
      onPress={abrir}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={22} color={colors.primary} />
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 14,
  },
  pressed: { opacity: 0.7 },
  text: { color: colors.text, fontSize: 16, fontWeight: '600' },
});