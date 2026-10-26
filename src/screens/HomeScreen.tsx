import React, { useState } from 'react';
import {View, Text, Switch, Pressable, Alert, ScrollView, Image, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialLinks from '../components/SocialLinks';
import { perfis, textoHome } from '../data/perfis';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts'
import { RootStackParamList } from '../types/navigation';
import foto from '../../assets/LogoDev_app.png'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [ligado, setLigado] = useState(false);
  // integrante cujas redes aparecem na seção "Acesse nossas redes"
  const [selecionado, setSelecionado] = useState(perfis[0].id);
  const perfil = perfis.find((p) => p.id === selecionado) ?? perfis[0];

  const alternar = (valor: boolean) => {
    setLigado(valor);
    Alert.alert('Switch pressionado');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />

        <Image source={foto} style={styles.imgLogo} resizeMode="contain"/>

        <View style={styles.content}>
          <Text style={styles.title}>{textoHome.tituloLinha1}</Text>
          <Text style={[styles.title, styles.highlight]}>
            {textoHome.tituloDestaque}
          </Text>
          <Text style={styles.description}>{textoHome.descricao}</Text>

          {/* Um botão "Sobre mim" para cada integrante */}
          {perfis.map((p) => (
            <PrimaryButton
              key={p.id}
              title={`Sobre mim – ${p.nome}`}
              onPress={() => navigation.navigate('Sobre', { id: p.id })}
            />
          ))}
          <PrimaryButton
            title="Entre em contato!"
            onPress={() => Alert.alert('Entre em contato')}
          />

          <Text style={styles.sectionTitle}>Acesse nossas redes:</Text>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Alterar visualização</Text>
            <Switch
              value={ligado}
              onValueChange={alternar}
              trackColor={{ false: '#3a3a3a', true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Seletor de integrante */}
          <View style={styles.chips}>
            {perfis.map((p) => {
              const ativo = p.id === selecionado;
              return (
                <Pressable
                  key={p.id}
                  onPress={() => setSelecionado(p.id)}
                  style={[styles.chip, ativo && styles.chipActive]}
                >
                  <Text style={[styles.chipText, ativo && styles.chipTextActive]}>
                    {p.nome}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <SocialLinks redes={perfil.redes} />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flexGrow: 1 },
  content: { paddingHorizontal: 24 },
  title: {
    fontFamily: fonts.title,
    color: colors.primary,
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign:'center'
  },
  highlight: {
    fontFamily: fonts.subtitle,
    color: colors.textMuted,
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 16,
    textAlign: 'center'
  },
  imgLogo: {
    width: 150,
    aspectRatio: 2752 / 1536,
    alignSelf: 'center',
    marginBottom: 24,
  },
  description: {
    fontFamily: fonts.body,
    color: colors.text,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    marginBottom: 24,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: fonts.title,
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  switchLabel: {
    fontFamily: fonts.body,
    color: colors.text,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  chips: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 16,
  },
  chip: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 0,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  chipActive: { backgroundColor: colors.buttonBackground },
  chipText: {
    fontFamily: fonts.subtitle,
    color: colors.primary,
    letterSpacing: 1,
  },
  chipTextActive: { color: colors.buttonText },
});