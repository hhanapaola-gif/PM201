import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Switch, Pressable, Alert, Platform, StyleSheet } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    // Aquí validamos si los datos no están vacíos.
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {

      if (Platform.OS === 'web') {
        alert('Debes llenar todos los campos.');
      } else {
        Alert.alert(
          'Campos incompletos :(',
          'Debes llenar todos los campos.'
        );
      }

      return;
    }

    // Validamos que el semestre sea numérico
    if (isNaN(Number(semestre))) {

      if (Platform.OS === 'web') {
        alert('El semestre debe ser un número.');
      } else {
        Alert.alert(
          'Hay un errorcito!',
          'El semestre debe ser un número.'
        );
      }

      return;
    }

    // Mostramos la información registrada
    const mensaje = `Nombre: ${nombre}
      Carrera: ${carrera}
      Semestre: ${semestre}

      Taller: ${taller ? 'Sí' : 'No'}
      Constancia: ${constancia ? 'Sí' : 'No'}
      Deportes: ${deportes ? 'Sí' : 'No'}`;

    if (Platform.OS === 'web') {
      alert(mensaje);
    } else {
      Alert.alert(
        'Registro enviado',
        mensaje
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Registro para evento universitario
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        keyboardType="numeric"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitulo}>
        Opciones
      </Text>

      <View style={styles.fila}>
        <Text style={styles.textoPregunta}>
          ¿Asistirá al taller?
        </Text>
        <Switch
          value={taller}
          onValueChange={setTaller}
        />
      </View>

      <View style={styles.fila}>
        <Text style={styles.textoPregunta}>
          ¿Requiere constancia?
        </Text>
        <Switch
          value={constancia}
          onValueChange={setConstancia}
        />
      </View>

      <View style={styles.fila}>
        <Text style={styles.textoPregunta}>
          ¿Participará en deportes?
        </Text>
        <Switch
          value={deportes}
          onValueChange={setDeportes}
        />
      </View>

      <Pressable
        style={styles.boton}
        onPress={enviarRegistro}
      >
        <Text style={styles.textoBoton}>
          Enviar registro
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f6f6',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ce70d1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  textoPregunta: {
    flex: 1,
    fontSize: 16,
  },

  boton: {
    marginTop: 20,
    backgroundColor: '#b90fe4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});