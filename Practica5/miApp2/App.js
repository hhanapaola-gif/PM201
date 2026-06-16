/* Zona 1: Importación de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* Zona 2: Main - Componentes. Todo lo que contiene la vista*/
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetarosa} nombre="Pao" carrera="Sistemas" materia="Móvil" cuatri="9" />

      <Perfil style={styles.tarjetagris} nombre="Ángel" carrera="Mecatrónica" materia="Móvil" cuatri="3" />

      <Perfil style={styles.tarjetarosa} nombre="Pao2" carrera="Sistemas" materia="Móvil" cuatri="9" />
    </View>
  );
}

/* Zona 3: Main - Estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tarjetarosa:{backgroundColor:'pink'},
  tarjetagris:{backgroundColor:'gray'},
});
