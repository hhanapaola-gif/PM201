import { View, Text, StyleSheet } from 'react-native';

export function Home () {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Home principal</Text>
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


    texto: {
        fontSize: 22,
}
});