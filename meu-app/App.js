import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  boxTitulo: {
    height: 80,
    backgroundColor: '#1f4f66',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'center',
  },

  tituloCabecalho: {
    color: '#0fc3d4',
    fontWeight: '700',
    fontSize: 20,
  },

  subtitulo: {
    color: '#fff',
  },

  tela: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxNumero: {
    borderColor: '#00a2ff',
    backgroundColor: '#004869',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  tituloTexto: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },

  numero: {
    fontSize: 80,
    color: '#fff',
  },

  boxBotao: {
    marginTop: 25,
    width: 200,
  },
});

const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.tituloCabecalho}>
        Sorteio DevMedia
      </Text>

      <Text style={estilo.subtitulo}>
        Hora de ver quem é o vencedor
      </Text>
    </View>
  );
};

const TelaInicial = () => {
  const [Rodadas, setRodada] = useState(1);

  const [numeroEscolhido, setNumeroEscolhido] = useState(0);

  const [numeroSorteado, setNumeroSorteado] = useState(0);

  const [UltimoNumeroSorteado, setUltimoNumeroSorteado] = useState(0);

  const [pontosRodada, setPontosRodada] = useState(0);

  const [pontosTotal, setPontosTotal] = useState(0);

  const[text, setText] = useState(' ');


  const gerarNumero = () => {

    if(Rodadas < 5){
      setUltimoNumeroSorteado(numeroSorteado);

      const novoNumero = Math.floor(Math.random() * 100 + 1);

      setNumeroSorteado(novoNumero);

      setRodada(Rodadas+1);

      CalcularPontos(novoNumero);
    } else if(Rodadas >= 5){
      setNumeroEscolhido(0);
      setNumeroSorteado(0);
      setRodada(1);
      setPontosRodada(0);
      setPontosTotal(0);
    }
  };

  const CalcularPontos = (numeroSorteado) =>{
    let pontos = 0
    if(numeroEscolhido > numeroSorteado){
      pontos = 100 - (numeroEscolhido - numeroSorteado);
    } else if(numeroSorteado > numeroEscolhido){
      pontos = 100 - (numeroSorteado - numeroEscolhido);
    } else{
      pontos = 100;
    }

    setPontosRodada(pontos);
    setPontosTotal(pontosTotal+pontos);
  }



  return (
    <View style={estilo.tela}>

      <Text style={estilo.tituloTexto}>
       Rodada: {Rodadas} de 5
      </Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>
      </View>
        <Text>
          Último número sorteado: {UltimoNumeroSorteado}
        </Text>

      <View style={estilo.boxBotao}>
        <Text>
        Qual Número será sorteado?
        </Text> 
        <TextInput
          keyboardType='numeric'
          onChangeText={(numero) => setNumeroEscolhido(number(numero))}
          placeholder='Digite um número de 0 a 99'
        />
        <Button
          title="Sortear"
          onPress={gerarNumero}
          color="#1f4f66"
        />
      </View>

      
        <View>
        <Text>Pontos da Rodada</Text>
        <Text>{pontosRodada}</Text>
        </View>
        <View>
          <Text>Pontuação Total {pontosTotal}</Text>
          <Text>{pontosTotal} / 500</Text>
        </View>


        <Text>Escolha um número para começar.</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
};

export default App;