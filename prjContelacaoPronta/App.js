import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {useState} from "react";
import { Modal } from 'react-native-web';
export default function App() {
const [visivel,setVisivel]= useState(false);
const [num, setNum]= useState(1);
const [constelacao,setConstelacao]= useState([
    {imagem:require("./assets/pegasus.png"), nome :"Pegasus", local:"Hemisferio Norte", desc: "A constelação Pegasus é uma constelação que representa um cavalo alado da mitologia grega.A constelação Pégaso é composta por três estrelas que formam o desenho de um triângulo, simbolizando uma das asas e seu corpo é constituído por um quadrado de quatro estrelas."},
    {imagem:require("./assets/cao.png"), nome :"Cão Maior", local:"Hemisferio Norte", desc: " A constelação de Cão Maior é talvez uma das mais impressionantes da esfera celeste, e uma das protagonistas é a brilhante estrela Sirius.A constelação de Cão Maior e a sua vizinha Cão menor, aparecem em muitas lendas."},
    {imagem:require("./assets/cruzeiroSul.png"), nome :"Cruzeiro do Sul", local:"Hemisferio Norte", desc: "A constelação Cruzeiro do Sul é uma constelação visível durante todo o ano no céu do Hemisfério Sul. Considerada a menor das constelações hoje existentes, o Cruzeiro do Sul (ou Crux) possui o formato de uma cruz formada por quatro estrelas principais."},
    {imagem:require("./assets/ursaMaior.png"), nome :"Ursa Maior", local:"Hemisferio Norte", desc: "A constelaçaão Ursa Maior é a constelação mais reconhecida no hemisfério norte. Esta é uma constelação grande, com estrelas razoavelmente brilhantes, sendo esta uma constelação relativamente fácil de localizar no céu noturno. "},
    {imagem:require("./assets/ursaMenor.png"), nome :"Ursa Menor", local:"Hemisferio Norte", desc: " A constelação Ursa Menor é uma constelação do hemisfério celestial norte que tem a forma de uma colher com o cabo dobrado1. É uma versão menor e menos brilhante da Ursa Maior, e contém a Estrela Polar, que serve de guia para os navegadores21. A constelação foi reconhecida pelo filósofo grego Thales de Miletus por volta de 600 a.C.21."},
    {imagem:require("./assets/pomba.png"), nome :"Pomba", local:"Hemisferio Norte", desc: "A constelação Pomba ou Columba, fácil de se localizar por se encontrar a sul da constelação de Cão Maior, uma das mais simples de se visualizar no céu. Este discreto grupo de estrelas homenageia a pomba que Noé enviou da sua arca, quando cessaram as chuvas do dilúvio universal, para ver se ela encontrava terra seca."},
    {magem:require("./assets/hydra.png"), nome :"Hydra", local:"Hemisferio Sul", desc: "A constelação Hydra A constelação Hydra é a maior das 88 constelações contemporâneas delineadas pela União Astronômica Internacional, abrangendo incríveis 1.303 graus quadrados de céu noturno12. Apesar do tamanho, só tem uma estrela "},
    {imagem:require("./assets/Orion.png"), nome :"Orion", local:"Hemisferio Norte", desc: "A constelação de Órion é, talvez, uma das constelações mais populares no mundo todo. Sua posição é privilegiada em relação à Linha do Equador e, por isso, pode ser vista tanto no Hemisfério Norte quanto no Hemisfério Sul da Terra."},
    {imagem:require("./assets/Fenix.png"), nome :"Fenix", local:"Hemisferio Norte", desc: " A constelação Fénix Esta não é uma figura celeste muito óbvia, por ser constituída por estrelas bastante ténues, mas a mais brilhante (Alfa Phoenicis) encontra-se com relativa facilidade. A estrela mais brilhante , Fênix é uma das 88 constelações que os astrônomos modernos dividiram o céu."},
    {imagem:require("./assets/Andromeda.png"), nome :"Andromeda", local:"Hemisferio Norte", desc: " A constelação Andrômeda ou Andrómeda (And) é uma das 48 constelações relacionadas pelo astrônomo greco-romano do século II Ptolemeu, e permanece como uma das 88 constelações modernas. É melhor observada de agosto a fevereiro, enquanto no Hemisfério Sul, o período de visibilidade é bem mais curto, de outubro a dezembro"},
  ]);
 

    function descricaoConstelacao(valor){
      setVisivel(true);
      setNum(valor);
    }
    function voltar(){
      setVisivel(false);
    }
  return (
    <View style={styles.container}>
      <View styles={styles.header}>
        <Image style= {styles.logo} source={require("./assets/logo.png")}></Image>
      </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(0)}>
            <Image style={styles.imgConstelacao} source={require("./assets/pegasus.png")}></Image>
            <Text style={styles.txtNome} >Pegasus</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(1)}>
            <Image style={styles.imgConstelacao} source={require("./assets/cao.png")}></Image>
            <Text style={styles.txtNome}>Cão Maior</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(2)}>
            <Image style={styles.imgConstelacao} source={require("./assets/cruzeiroSul.png")}></Image>
            <Text style={styles.txtNome} >Cruzeiro do Sul</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(3)}>
            <Image style={styles.imgConstelacao} source={require("./assets/ursaMaior.png")}></Image>
            <Text style={styles.txtNome} >Ursa Maior</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(4)}>
            <Image style={styles.imgConstelacao} source={require("./assets/ursaMenor.png")}></Image>
            <Text style={styles.txtNome} >Ursa Menor</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(5)}>
            <Image style={styles.imgConstelacao} source={require("./assets/pomba.png")}></Image>
            <Text style={styles.txtNome} >Pomba</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(6)}>
            <Image style={styles.imgConstelacao} source={require("./assets/pegasus.png")}></Image>
            <Text style={styles.txtNome} >Hydra</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(7)}>
            <Image style={styles.imgConstelacao} source={require("./assets/Orion.png")}></Image>
            <Text style={styles.txtNome} >Orion</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(8)}>
            <Image style={styles.imgConstelacao} source={require("./assets/Fenix.png")}></Image>
            <Text style={styles.txtNome}>Fenix</Text>
            <br></br>
          </TouchableOpacity>
        </View>
     
        <View style={styles.containerConstelacao}>
          <TouchableOpacity onPress={() => descricaoConstelacao(9)}>
            <Image style={styles.imgConstelacao} source={require("./assets/Andromeda.png")}></Image>
            <Text style={styles.txtNome} >Andromeda</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={visivel}animation type="fade">
          <View style={styles.container}>
            <View style={styles.containerImg}>
              <Image style={styles.imgConstelacao} source={constelacao[num].imagem}></Image>
            </View>
              <View styles={styles.containerDesc}></View>
              <Text style ={styles.txtDesc}>{constelacao[num].nome}</Text>
              <br></br>
              <Text style ={styles.txtDesc}>{constelacao[num].local}</Text>
              <br></br><br></br><br></br>
              <Text style ={styles.txtDesc}>{constelacao[num].desc}</Text>
              <View style={styles.botao}>
            <TouchableOpacity onPress={()=> voltar()}>
            <Image style={styles.imgBotao} source={require ("./assets/botao.png")}/>
            </TouchableOpacity>
          </View>
          </View>
         
        </Modal>
    </View>
);


  }
  
  
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#221F37',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width:200,
      height:200
    },
    imgConstelacao:{
      width:200,
      height:200
    },
    txtNome:{
      textAlign:'center',
      color:'white',
    },
      txtDesc:{
        color:'white',
        textAlign: 'center',
      
      
    },
    imgBotao:{
      width: 200,
      height:200,
      alignItems: 'center',
      paddingTop:200,
    }
   
  
  });
  
  
  



