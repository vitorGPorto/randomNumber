import React, {useState} from 'react'
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'


const App = () => {
  const [number, setNumber] = useState(0)
  function handleNumber(){
    const novo_number = Math.floor(Math.random() * 100)
    setNumber(novo_number)
  }
  return (
    <>
     
            <SafeAreaView style={style.container}>
              <Text  style={style.number}>{number}</Text>
                 <TouchableOpacity onPress={handleNumber} style={style.button}>
                   <Text>Gerar Número</Text>
                  </TouchableOpacity>
            </SafeAreaView>
  </>
  );
};

const style= StyleSheet.create({
  container:{
    backgroundColor:'#000fff',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  number: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor:'#FFFFFF',
    width:'70%',
    paddingHorizontal:75,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent:'center',
    marginTop: 10
  },
})
export default App;
