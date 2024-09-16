

import react,{Component} from 'react';
import {View, Text, Image} from 'react-native';

class App extends Component{
  render (){
    return(

      <View>
        <Text> Olá mundo</Text>
        <Text style={{

          color:'red',//cor
          fontSize:25,//tamanho da fonte
          margin:15,
          fontWeight:'bold',//negrito
          fontStyle:'italic',//italico
          fontFamily:'Arial',//tipo de fonte
          textAlign:'center',//centralizar
          lineHeight:35,//define a altura
          letterSpacing:2, //espaçamento entre as letras 
          textDecorationLine:'underline',//sublinhado
          textDecorationStyle:'dotted',//estilo do sublinhado
          textTransform:'uppercase',//letra maíscula

        }}>Aula de mobile</Text>
        <Image source={{uri:'https://sujeitoprogramador.com/steve.png'}}
        style={{width:300, height:300, marginBottom:20}}></Image>

<Image source={require('./assets/Bill_Gates.jpg')}
        style={{width:300, height:300, marginBottom:20}}></Image>

      </View>
    );
  }
}

export default App;