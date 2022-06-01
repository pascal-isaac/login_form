import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native"

const HomeLoginScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <View style={{ flex: 1.15, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: '100%', width: '100%', resizeMode:'contain'}} source={require('../assets/LogoHome.png')} />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                <Text style={styles.btnCo}>Se connecter</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.btnSignup}>S'inscrire</Text>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default HomeLoginScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCo: {
        paddingTop: 10,
        backgroundColor: '#092a5d',
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        width: 300,
        height: 60,
        marginTop: 40
      },
      btnSignup: {
        paddingTop: 10,
        backgroundColor: '#ffffff',
        color: '#3D3D3D',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        width: 300,
        height: 60,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#3D3D3D'
      },
});