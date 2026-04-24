import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "../.../assets/logo.jpg";
import styles from "../styles";


export default function TelaInicial (props){
  return (
    <View style={styles.container}>
      <Text>Assasino foda do grito uuuuu ghostface aaaaa</Text>
      <image source={logo} style={estilos.imagem}></image>

      <Text style={estilos.titulo}>
        Você sabe qual é a ordem cronológica da franquia assasino fantasminha da faca UwU
      </Text>

      <Text style={estilos.textos}>
        Os filmes da franquia fantasminha UwU estão abaixo. Clique nos botões
      </Text>

      <Button title="Ver o 1º Filme" onPress = { () => props.navigation.navigate("Tela Filme 1") } color="#372d00" />
      <Button title="Ver o 2º Filme" onPress = { () => props.navigation.navigate("Tela Filme 2") } color="#372d00" />
      <Button title="Ver o 3º Filme" onPress = { () => props.navigation.navigate("Tela Filme 3") } color="#372d00" />
  

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


