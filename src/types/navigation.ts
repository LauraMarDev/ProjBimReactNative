//Descreve quais telas existem e quais parâmetros cada uma recebe. Assim o TypeScript avisa se você esquecer de passar o id
export type RootStackParamList = {
  Home: undefined;
  Sobre: { id: string };
};
