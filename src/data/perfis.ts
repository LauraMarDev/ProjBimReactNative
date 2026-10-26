import { ImageSourcePropType } from 'react-native';

export type Redes = {
    github: string;
    linkedin: string;
    //instagram: string;
    //twitch: string;
};

export type Perfil = {
    id: string;
    nome: string;
    foto: ImageSourcePropType;
    bio: string[];
    email: string;
    redes: Redes;
};

export const perfis: Perfil[] = [
    {
        id: 'aluno1',
        nome: 'Diego Leão',
        foto: require('../../assets/Randy Marsh.png'),
        bio: ['Olá, me chamo Diego e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Itu'],
        email: 'diegolvf.profissional@gmail.com',
        redes: {
            github: 'https://github.com/diegolvf',
            linkedin: 'https://www.linkedin.com/in/diegolvf/',
            //instagram: 'https://www.instagram.com/aluno1',
            //twitch: 'https://www.twitch.tv/aluno1',
        },
    },
    {
        id: 'aluno2',
        nome: 'Laura Marques',
        foto: { uri: 'https://i.pravatar.cc/500?img=47' },
        bio: ['Parágrafo 1...', 'Parágrafo 2...', 'Parágrafo 3...'],
        email: 'aluno1@email.com',
        redes: {
            github: 'https://github.com/aluno1',
            linkedin: 'https://www.linkedin.com/in/aluno1',
            //instagram: 'https://www.instagram.com/aluno1',
            //twitch: 'https://www.twitch.tv/aluno1',
        },
    },
];

export const getPerfil = (id?: string): Perfil =>
    perfis.find((p) => p.id === id) ?? perfis[0];

export const textoHome = {
    tituloLinha1: 'Eleve seu negócio digital a outro nível',
    tituloDestaque: 'com um Front-end de qualidade!',
    descricao:
        'Para protteger o mundo da devastação! Para unir as pessoas de nossa nação Para denunciar os males da verdade e do amor. Equipe Rocket decolando na velocidade da luz!',
};