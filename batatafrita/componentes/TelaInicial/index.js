import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import { blue } from 'react-native-reanimated/lib/typescript/Colors';
// import { addWhitelistedNativeProps } from 'react-native-reanimated/lib/typescript/ConfigHelper';
// import logo from "../.../assets/logo/a.avif";


export default function TelaInicial (props){
  
  const cor = "#af3e3eff";
 
  
  return (

    
    <View style={estilos.container}>
      <Text style={estilos.titulo}></Text>
      {/* <image source={logo} style={estilos.imagem}></image> */}

      <Text style={estilos.titulo}>
        Veja agora os top 3 melhoeres filmes do momento!!!!
      </Text>

      <Text style={estilos.textos}>
         Clique nos botões↴
      </Text>

       {/* <button style={estilos.B} onPress = { () => props.navigation.navigate("Tela Filme 1") } >
        Ver filme 1
      </button>
      <button style={estilos.B} onPress = { () => props.navigation.navigate("Tela Filme 2") } >
        Ver filme 2
      </button>
      <button style={estilos.B} onPress = { () => props.navigation.navigate("Tela Filme 3") } >
        Ver filme 3
      </button>  */}

      <Button title="Ver o 1º Filme" onPress = { () => props.navigation.navigate("Tela Filme 1") } style={estilos.BUTAO} color={cor} />
      <Button title="Ver o 2º Filme" onPress = { () => props.navigation.navigate("Tela Filme 2") } style={estilos.BUTAO} color={cor} />
      <Button title="Ver o 3º Filme" onPress = { () => props.navigation.navigate("Tela Filme 3") } style={estilos.BUTAO} color={cor} />
  

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252121ff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    borderWidth: '20px',
    borderColor: '#af3e3eff',
  },
  titulo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center',
    marginBottom: '50px',
    

  },
  textos: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '30px',
  },

  B:{
    backgroundColor: "#5e0404",
    borderRadius: '10px',
    width: '200px',
    height: '50px',
    fontSize: '18px',


  },

  
});


