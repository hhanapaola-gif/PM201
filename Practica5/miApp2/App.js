/* Zona 1: Importación de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';

/* Zona 2: Main - Componentes. Todo lo que contiene la vista*/
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/wave.png')}/>
      <Text>Hola mundo React Native!</Text>
      <Text>--------------------------------</Text>
      <Saludo/>
      <Text>--------------------------------</Text>
      <Saludo2/>
      <StatusBar style="auto" />

    </View>
  );
}

/* Zona 3: Main - Estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
