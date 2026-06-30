/* Zona 1: Importaciones de archivos y componentes */

import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PracticaGena from './PracticaGena';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import { Componente4_0 } from './Componente4_0';
import ComponenteAlert from './ComponenteAlert';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';

/* Zona 2: Main - Componentes */

export default function App() {

    const [screen, setScreen] = useState('menu');

    switch (screen) {

        case 'tarjetas':
            return <TarjetasScreen />;

        case 'componente1':
            return <Componente1 />;

        case 'PracticaGena':
            return <PracticaGena />;

        case 'pressable':
            return <PressableScreen />;

        case 'Switch':
            return <SwitchScreen />;

        case 'Componente4_0':
            return <Componente4_0 />;

        case 'ComponenteAlert':
            return <ComponenteAlert />;

        case 'FlatListScreen':
            return <FlatListScreen />;

        case 'SectionListScreen':
            return <SectionListScreen />;

        default:
            return (
                <View style={styles.container}>

                    <Text style={styles.titulo}>MENÚ DE PRÁCTICAS</Text>

                    <Pressable style={styles.boton} onPress={() => setScreen('tarjetas')}>
                        <Text style={styles.textoBoton}>Práctica Tarjetas</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('componente1')}>
                        <Text style={styles.textoBoton}>Práctica Componente 1</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('PracticaGena')}>
                        <Text style={styles.textoBoton}>Práctica SafeAreaView</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('pressable')}>
                        <Text style={styles.textoBoton}>Práctica Pressable</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('Switch')}>
                        <Text style={styles.textoBoton}>Práctica Switch</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('Componente4_0')}>
                        <Text style={styles.textoBoton}>Práctica TextInput</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('ComponenteAlert')}>
                        <Text style={styles.textoBoton}>Práctica Alert</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('FlatListScreen')}>
                        <Text style={styles.textoBoton}>Práctica FlatList</Text>
                    </Pressable>

                    <Pressable style={styles.boton} onPress={() => setScreen('SectionListScreen')}>
                        <Text style={styles.textoBoton}>Práctica SectionList</Text>
                    </Pressable>

                </View>
            );
    }
}

/* Zona 3: Estilos */

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    boton: {
        width: 260,
        backgroundColor: '#2196F3',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',

        elevation: 4, // Android
        shadowColor: '#000', // iOS
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    textoBoton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

});