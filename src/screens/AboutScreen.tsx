import React, { useMemo } from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialLinks from '../components/SocialLinks';
import { getPerfil } from '../data/perfis';
import { textos } from '../data/textos';
import { useTheme } from '../theme/LoadTheme';
import { Colors } from '../theme/colors';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Sobre'>;

export default function AboutScreen({ route, navigation }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => criarStyles(colors), [colors]);
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
            title={textos.botaoContato}
            onPress={() => Alert.alert('Entre em contato', perfil.email)}
          />

          <Text style={styles.sectionTitle}>{textos.tituloRedesSobre}</Text>
          <SocialLinks redes={perfil.redes} />
          
          <PrimaryButton
            title={textos.botaoVoltar}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const criarStyles = (colors: Colors) =>
  StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    scroll: { flexGrow: 1 },
    content: { paddingHorizontal: 24 },
    title: {
      color: colors.text,
      fontSize: 24,
      fontWeight: '800',
      marginBottom: 4,
    },
    name: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 16,
    },
    paragraph: {
      color: colors.textMuted,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 18,
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 12,
    },
  });