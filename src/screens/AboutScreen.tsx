import React from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialLinks from '../components/SocialLinks';
import { getPerfil } from '../data/perfis';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Sobre'>;

// Tela única reutilizada pelos dois integrantes:
// o conteúdo vem de src/data/perfis.ts, escolhido pelo id recebido na navegação
export default function AboutScreen({ route, navigation }: Props) {
  const perfil = getPerfil(route.params.id);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />
        <ProfileImage source={perfil.foto} />

        <View style={styles.content}>
          <Text style={styles.title}>Sobre mim</Text>
          <Text style={styles.name}>{perfil.nome}</Text>

          {perfil.bio.map((paragrafo, i) => (
            <Text key={i} style={styles.paragraph}>
              {paragrafo}
            </Text>
          ))}

          <PrimaryButton
            title="Entre em contato!"
            onPress={() => Alert.alert('Entre em contato', perfil.email)}
          />

          <Text style={styles.sectionTitle}>Minhas redes:</Text>
          <SocialLinks redes={perfil.redes} />

          <PrimaryButton title="Voltar" onPress={() => navigation.goBack()} />
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
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: fonts.subtitle,
    color: colors.textMuted,
    fontSize: 16,
    letterSpacing: 4,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  paragraph: {
    fontFamily: fonts.body,
    color: colors.text,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: fonts.title,
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
});