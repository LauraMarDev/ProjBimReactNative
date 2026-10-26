import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import { colors } from './src/theme/colors';
import { fonts } from './src/theme/fonts';
import { RootStackParamList } from './src/types/navigation';
import { useFonts, Orbitron_400Regular, Orbitron_700Bold } from '@expo-google-fonts/orbitron';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Orbitron_400Regular,
    Orbitron_700Bold,
    BebasNeue_400Regular,
  });

  if (fontError) console.log('Erro ao carregar fontes:', fontError);

  if (!fontsLoaded && !fontError) return null;
  
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}