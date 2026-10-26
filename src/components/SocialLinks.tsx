import React from 'react';
import { View } from 'react-native';
import SocialButton from './SocialButtons';
import { Redes } from '../data/perfis';
import { textos } from '../data/textos';

export default function SocialLinks({ redes }: { redes: Redes }) {
  return (
    <View>
      <SocialButton icon="logo-github" label={textos.redes.github} url={redes.github} />
      <SocialButton icon="logo-linkedin" label={textos.redes.linkedin} url={redes.linkedin} />
      {/* <SocialButton icon="logo-instagram" label={textos.redes.instagram} url={redes.instagram} /> */}
      {/* <SocialButton icon="logo-twitch" label={textos.redes.twitch} url={redes.twitch} /> */}
    </View>
  );
}