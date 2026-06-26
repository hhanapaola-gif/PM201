/* Zona 1: Importaciones de archivos y componentes*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PracticaGena from './PracticaGena';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import { Componente4_0 } from './Componente4_0';
import ComponenteAlert from './ComponenteAlert';

/* Zona 2: Main - Componentes  */

export default function App() {
    const [screen,setScreen]= useState('menu');
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'PracticaGena':
            return <PracticaGena/>;
        case 'pressable':
            return <PressableScreen/>;
        case 'Switch':
            return <SwitchScreen/>;
        case 'Componente4_0':
            return <Componente4_0/>;
        case 'ComponenteAlert':
            return <ComponenteAlert />;
        case 'menu':
            default:
                return (
                    <View  style={styles.container}>
                        <Text>MENÚ DE PRACTICAS</Text>
                        <Button title="Practica tarjetas" onPress={()=>setScreen('tarjetas')}/>
                        <Button title="Practica Componente1" onPress={()=>setScreen('componente1')}/>
                        <Button title="Practica SafeAreaView" onPress={()=>setScreen('PracticaGena')}/>
                        <Button title="Practica Pressable" onPress={()=>setScreen('pressable')}/>
                        <Button title="Practica Switch" onPress={()=>setScreen('Switch')}/>
                        <Button title="Practica TextInput" onPress={()=>setScreen('Componente4_0')}/>
                        <Button title="Practica Alert" onPress={()=>setScreen('ComponenteAlert')}/>
                    </View>
                );
    }
}

/* Zona 3: Estilos y posicionamiento de los componentes*/
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    }
});