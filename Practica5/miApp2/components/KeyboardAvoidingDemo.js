import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,View,TextInput,Pressable,Alert,FlatList,ImageBackground,Image,ActivityIndicator,KeyboardAvoidingView,Platform,} from 'react-native';
import {SafeAreaProvider,SafeAreaView,} from 'react-native-safe-area-context';

export default function App() {

    const [mostrarSplash, setMostrarSplash] = useState(true);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);
    const [guardando, setGuardando] = useState(false);

    const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

    useEffect(() => {
        setTimeout(() => {
        setMostrarSplash(false);
        }, 2000);
    }, []);

    const agregarLibro = () => {

    if (
        titulo.trim() === '' ||
        autor.trim() === '' ||
        genero.trim() === ''
        ) {

        Alert.alert(
            'Campos incompletos',
            'Todos los campos son obligatorios'
        );

        return;
        }

        setGuardando(true);
        
        setTimeout(() => {

        const nuevoLibro = {
            id: Date.now().toString(),
            titulo: titulo,
            autor: autor,
            genero: genero,
        };

        setLibros([...libros, nuevoLibro]);
        setTitulo('');
        setAutor('');
        setGenero('');
        setGuardando(false);

        Alert.alert(
            'Libro agregado',
            'El libro se guardó correctamente :)'
        );
        }, 4000);
    };

    if (mostrarSplash) {

        return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.splash}>

            <Image
                source={require('./assets/libros.jpeg')}
                style={styles.imagen}
            />

            <Text style={styles.textoSplash}>
                Mis libros
            </Text>

            </SafeAreaView>
        </SafeAreaProvider>
        );
    }

    return (

        <SafeAreaProvider>
        <ImageBackground
            source={require('./assets/fondo.jpeg')}
            style={styles.fondo}
        >

            <SafeAreaView style={styles.contenedor}>

            <KeyboardAvoidingView
                style={styles.contenedor}
                behavior={behavior}
            >

                <Text style={styles.titulo}>
                Registro de Libros
                </Text>

                <TextInput
                style={styles.input}
                placeholder="Título del libro"
                value={titulo}
                onChangeText={setTitulo}
                />

                <TextInput
                style={styles.input}
                placeholder="Autor"
                value={autor}
                onChangeText={setAutor}
                />

                <TextInput
                style={styles.input}
                placeholder="Género"
                value={genero}
                onChangeText={setGenero}
                />

                <Pressable
                style={styles.boton}
                onPress={agregarLibro}
                disabled={guardando}
                >

                {
                    guardando ? (
                    <View style={styles.cargando}>
                        <ActivityIndicator />
                        <Text style={styles.textoBoton}>
                        Guardando...
                        </Text>
                    </View>
                    ): 
                    (
                    <Text style={styles.textoBoton}>
                        Agregar libro
                    </Text>
                    )
                }

                </Pressable>

                <Text style={styles.total}>
                Total de libros: {libros.length}
                </Text>


                <FlatList
                data={libros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <View style={styles.tarjeta}>
                    <Text style={styles.tituloLibro}>
                        {item.titulo}
                    </Text>

                    <Text>
                        Autor: {item.autor}
                    </Text>

                    <Text>
                        Género: {item.genero}
                    </Text>
                    </View>
                )}
                />

            </KeyboardAvoidingView>

            </SafeAreaView>
        </ImageBackground>
        </SafeAreaProvider>
    );
    }


    const styles = StyleSheet.create({
    fondo: {
        flex: 1,
    },

    contenedor: {
        flex: 1,
        padding: 15,
    },

    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    imagen: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    textoSplash: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'white',
    },

    input: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
    },

    boton: {
        backgroundColor: '#2764c5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },

    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
    },

    cargando: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    total: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 15,
    },

    tarjeta: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },

    tituloLibro: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    });