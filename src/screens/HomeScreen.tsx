import React, { useMemo, useState } from 'react';
import { ScrollView, View, Text, Switch, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialLinks from '../components/SocialLinks';
import { perfis, textoHome } from '../data/perfis';
import { textos } from '../data/textos';
import { useTheme } from '../theme/LoadTheme';
import { Colors } from '../theme/colors';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { colors, isAmarelo, alternarTema } = useTheme();
  const styles = useMemo(() => criarStyles(colors), [colors]);

  const [ligado, setLigado] = useState(false);
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
        <ProfileImage source={perfis[0].foto} />

        <View style={styles.content}>
          <Text style={styles.title}>{textoHome.tituloLinha1}</Text>
          <Text style={[styles.title, styles.highlight]}>
            {textoHome.tituloDestaque}
          </Text>
          <Text style={styles.description}>{textoHome.descricao}</Text>

          {perfis.map((p) => (
            <PrimaryButton
              key={p.id}
              title={textos.botaoSobre(p.nome)}
              onPress={() => navigation.navigate('Sobre', { id: p.id })}
            />
          ))}
          <PrimaryButton
            title={textos.botaoContato}
            onPress={() => Alert.alert('Entre em contato')}
          />

          <Text style={styles.sectionTitle}>{textos.tituloRedesHome}</Text>

          {/* Switch original do PDF (Alert) */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>{textos.switchVisualizacao}</Text>
            <Switch
              value={ligado}
              onValueChange={alternar}
              trackColor={{ false: colors.switchOff, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Novo switch: alterna o tema */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>{textos.switchTema}</Text>
            <Switch
              value={isAmarelo}
              onValueChange={alternarTema}
              trackColor={{ false: colors.switchOff, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

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

const criarStyles = (colors: Colors) =>
  StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.background },
    scroll: { flexGrow: 1 },
    content: { paddingHorizontal: 24 },
    title: {
      color: colors.text,
      fontSize: 24,
      fontWeight: '800',
      lineHeight: 32,
    },
    highlight: { color: colors.primary, marginBottom: 16 },
    description: {
      color: colors.textMuted,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 24,
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 12,
    },
    switchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    switchLabel: { color: colors.textMuted, fontSize: 14 },
    chips: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
      marginTop: 4,
      marginBottom: 16,
    },
    chip: {
      borderWidth: 1.5,
      borderColor: colors.primary,
      borderRadius: 2,
      paddingVertical: 6,
      paddingHorizontal: 16,
    },
    chipActive: { backgroundColor: colors.primary },
    chipText: { color: colors.primary, fontWeight: '600' },
    chipTextActive: { color: colors.buttonText },
  });