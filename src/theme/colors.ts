export type Colors = {
  background: string;
  primary: string;
  text: string;
  textMuted: string;
  buttonText: string;
  border: string;
  switchOff: string;
  btnColor: string;
  btnBackground: string;
  statusBar: 'red' | 'yellow';
};

// Tema 1: vermelho e branco
export const temaVermelho: Colors = {
  background: '#0d0d0d',
  primary: '#FF0A54',
  text: '#E4E1F0',
  textMuted: '#FFA3B8',
  buttonText: '#FFFFFF',
  border: '#FF0A54',
  switchOff: '#C4C4C4',
  btnColor: '#FF0A54',
  btnBackground: '#E4E1F0',
  statusBar: 'red'
};

// Tema 2: amarelo e preto
export const temaAmarelo: Colors = {
  background: '#000000',
  primary: '#FFD60A',
  text: '#FFFFFF',
  textMuted: '#D0D0D0',
  buttonText: '#000000',
  border: '#FFD60A',
  switchOff: '#4A4A4A',
  btnColor: '#000000',
  btnBackground: '#FFD60A',
  statusBar: 'yellow'
};