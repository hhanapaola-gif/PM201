/* Zona 1: Importación de archivos y componentes  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';

/* Zona 2: Main - Componentes. Todo lo que contiene la vista*/
export default function App() {

    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>  
        case 'menu':
            default:
            return (
                <View>
                    <Text>Menú de prácticas</Text>
                        <Button title = "Práctica Tarjetas" onPress={()=>setScreen('tarjetas')}/>
                        <Button title = "Práctica  Componente1" onPress={()=>setScreen('componente1')}/>
                </View>
            ); //Return
    } //Switch
}//Función

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
