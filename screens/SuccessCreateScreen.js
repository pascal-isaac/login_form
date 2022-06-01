import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const SuccessCreateScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{ flex: 1.45, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: '80%', width: '100%', resizeMode:'contain'}} source={require('../assets/validation.png')} />
                <Text style={styles.txtTitle}>Votre compte a été créé avec succès</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                <Text style={styles.btnValidation}>Se connecter</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccessCreateScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnValidation: {
        paddingTop: 13,
        backgroundColor: '#2738C2',
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center',
        width: 250,
        height: 70,
        marginVertical: 40,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5
    },
      txtTitle: {
        color: '#838383',
        textAlign:'center',
        marginHorizontal: 60,
        fontSize: 24,
        marginTop: 35,
        marginBottom: 8,
    }
});