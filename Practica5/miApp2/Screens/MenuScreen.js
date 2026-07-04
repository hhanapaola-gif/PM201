/* Zona 1: Importaciones de archivos y componentes */

import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PracticaGena from './PracticaGena';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import { Componente4_0 } from './Componente4_0';
import ComponenteAlert from './ComponenteAlert';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import { ImagenFondo } from './ImagenFondo';
import { Home } from './Home';
import { SplashScreen } from './SplashScreen';
import { BottomSheet } from '../components/BottomSheet';
import { Modal } from 'react-native';
import ComponentesNativosScreen from './ComponentesNativosScreen';

/* Zona 2: Main - Componentes */

export default function App() {

    const [screen, setScreen] = useState('menu');

    useEffect(() => {
        if (screen === 'SplashScreen') {
            const timer = setTimeout(() => {
                setScreen('Home');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

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

        case 'ImagenFondo':
            return <ImagenFondo style={styles.container} />;

        case 'SplashScreen':
            return <SplashScreen />;

        case 'Home':
            return <Home />;

        case 'Modal':
            return <Modal />;

        case 'BottomSheet':
            return <BottomSheet />;

        case 'componentesNativos':
            return <ComponentesNativosScreen />;

        default:
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator={false}
                    >

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

                        <Pressable style={styles.boton} onPress={() => setScreen('ImagenFondo')}>
                            <Text style={styles.textoBoton}>Práctica ImagenFondo</Text>
                        </Pressable>

                        <Pressable style={styles.boton} onPress={() => setScreen('SplashScreen')}>
                            <Text style={styles.textoBoton}>Práctica SplashScreen</Text>
                        </Pressable>

                        <Pressable style={styles.boton} onPress={() => setScreen('componentesNativos')}>
                            <Text style={styles.textoBoton}>Práctica KeyAvoiding y ActivityIndicator</Text>
                        </Pressable>

                    </ScrollView>
                </SafeAreaView>
            );
    }
}

/* Zona 3: Estilos */

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 30,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 30,
    },

    boton: {
        width: 260,
        backgroundColor: '#2196F3',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',

        elevation: 4,
        shadowColor: '#000',
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
        textAlign: 'center',
    },
});