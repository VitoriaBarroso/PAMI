import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {useState} from "react";
export default function App() {
const [imgJogador, setImgJogador]= useState(0);
const [imgMaquina, setImgMaquina]= useState(0);
const [pontuacaoJogador, setPontuacaoJogador]= useState(0);
const [pontuacaoMaquina, setPontuacaoMaquina]= useState(0);

function exibirImagem(valor){
  if(valor==0){
    return (<Image source={require('./assets/caixa.png')} style={styles.caixa}/>)
  }else if(valor==1){
    return (<Image source={require('./assets/pedra.png')} style={styles.imgJogada}/>)
  }else if (valor==2){
    return (<Image source={require('./assets/papel.png')} style={styles.imgJogada}/>)
  }else if(valor==3){
    return (<Image source={require('./assets/tesoura.png')} style={styles.imgJogada}/>)
  }
}

function jogar(valor){
  console.log(valor)
  setImgJogador(valor)
  let aleatorioMaquina=Math.floor(Math.random()*3)+1
  setImgMaquina(aleatorioMaquina)
  if(valor==1 && aleatorioMaquina==2 || valor==2 && aleatorioMaquina==3 || valor==3 && aleatorioMaquina==1){
    setPontuacaoJogador(pontuacaoJogador+1)
  }else if(valor==2 && aleatorioMaquina==1 || valor==3 && aleatorioMaquina==2 || valor==1 && aleatorioMaquina==3){
  setPontuacaoMaquina(pontuacaoMaquina+1)
  }

}
function novaPartida(){
  setImgJogador(0);
  setImgMaquina(0);
  setPontuacaoJogador(0);
  setPontuacaoMaquina(0);
}

return (
  <View style={styles.container}>
    <View style={styles.cx}>
      <Image style={{flex:1, width:400,  height: 200,  textAlign: 'center',  fontWeight: 500, }} source={require("./assets/Titulo.png")}/>
    </View>
    <View style={styles.caixa2}>
     <View style={styles.conteudo}>
        <Text style={styles.textPlacar}>PLACAR</Text>
     </View>
     <View style={styles.conteudo}>

        <Text style={styles.placar}>{pontuacaoJogador}</Text>
        <Text style={styles.placar}>{pontuacaoMaquina} </Text>
     </View>
    </View>
    <View style={styles.caixa3}>
    {exibirImagem (imgJogador)}
    <Image style={{ width:80, height:50}} source={require("./assets/vs.png")}/>
    {exibirImagem(imgMaquina)}
    </View>

    <View style={styles.caixa4}>
     <TouchableOpacity style={styles.botao} onPress={()=>novaPartida()}>
      <Text style={styles.botaoPartida}>Nova Partida</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.caixa5}>
      <TouchableOpacity  onPress={()=>jogar(1)}>
        <Image style={styles.imgJogada} source={require("./assets/pedra.png")}/>  
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>jogar(2)}>
        <Image style={styles.imgJogada} source={require("./assets/papel.png")}/>  
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>jogar(3)}>
        <Image style={styles.imgJogada} source={require("./assets/tesoura.png")} />  
      </TouchableOpacity>
    </View>
 </View>
);
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  caixa2: {
    flex:1,
    
  },
  caixa:{
    height:100,
    width:100,
  },
  caixa3: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  caixa4: {
    flex:1,
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  botao: {
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width: 200,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2a74b8',
  },
  botaoPartida: {
    fontSize: 20,
    fontWeight: 500
    
  },
  caixa5: {
    flex:1,
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  cx: {
    flex:1,
    
  },
  textPlacar:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 500,
    
  },
  conteudo:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
   
  },
  placar:{
    fontSize: 50,
    fontWeight: 500,

  },
  imgJogada: {
    width: 100,
    height:80,
  },
  
  
});

