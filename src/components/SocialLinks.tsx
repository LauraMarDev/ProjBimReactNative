import React from 'react';
import { View } from 'react-native';
import SocialButton from './SocialButtons';
import { Redes } from '../data/perfis';

export default function SocialLinks({ redes }: { redes: Redes }) {
  return (
    <View>
      <SocialButton icon="logo-github" label="GitHub" url={redes.github} />
      <SocialButton icon="logo-linkedin" label="Linkedin" url={redes.linkedin} />
      <SocialButton icon="logo-instagram" label="Instagram" url={redes.instagram} />
      <SocialButton icon="logo-twitch" label="Twitch" url={redes.twitch} />
    </View>
  )
}