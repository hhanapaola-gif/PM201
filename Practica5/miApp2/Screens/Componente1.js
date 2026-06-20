/* Zona 1: Importación de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/* Zona 2: Main - Componentes. Todo lo que contiene la vista*/
export default function App() {
    return (
        <View>
            <Text>Aquí va la primer práctica de Componentes Nativos</Text>
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
});
