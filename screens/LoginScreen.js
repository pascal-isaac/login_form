import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"
import { TextInput as TextInputEye } from 'react-native-paper';


const LoginScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    const [borderColor, setBorderColor] = useState('#838383');

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (val.length === 0) {
          setEmailValidError('');
        } else if (reg.test(val) === false) {
          setEmailValidError('Entrez une adresse mail valide');
          setBorderColor('red');
        } else if (reg.test(val) === true) {
          setEmailValidError('');
          setBorderColor('blue');
        }
        };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.60, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: '100%', width: '100%', resizeMode: 'contain', marginTop: 20 }} source={require('../assets/CONNEC1.png')} />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.txtTitle}>Email</Text>
                <TextInput
                    style={{borderColor : borderColor,         
                        fontSize: 17,
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        paddingHorizontal: 15,
                        marginTop: 5,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        color: '#838383',
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 6.84,
                        elevation: 5}} placeholder="Entrez votre email"
                    returnKeyType="next"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                      }}
                      onFocus={() => setBorderColor('blue')}
                    theme={{ roundness: 10 }}
                />
                {emailValidError ? <Text style={{color:'red', marginTop: 5}}>{emailValidError}</Text> : null}
                <Text style={styles.txtTitle}>Mot de passe</Text>
                <TextInputEye
                    style={styles.textInput} secureTextEntry={passwordVisible} placeholder="Entrez votre mot de passe"
                    returnKeyType="done"
                    autoCapitalize="none"
                    theme={{ roundness: 10 }}
                    right={<TextInputEye.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                />

                <TouchableOpacity >
                    <Text style={styles.btnValidation}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Pas encore inscrit ? <Text style={{ fontSize: 18, color: '#2738C2', fontWeight: 'bold' }}>Créer un compte</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen


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
        marginVertical: 30,
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
    textInput: {
        fontSize: 17,
        height: 50,
        width: 300,
        borderColor: '#838383',
        borderWidth: 2,
        paddingHorizontal: 15,
        marginTop: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        color: '#838383',
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
        alignSelf: 'flex-start',
        marginLeft: 60,
        fontSize: 22,
        marginTop: 15,
        marginBottom: 8,
        fontWeight: 'bold'
    }
});