import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"

import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const SignupScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    const [borderColor, setBorderColor] = useState('#838383');
    const [color, setColor] = useState('red');


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

    const [password, setPassword] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordValidError, setConfirmPasswordValidError] = useState('');

    const handleValidPassword = val => {
        if (val.length == 0) {
            setPasswordValidError('Un mot de passe est requis');
            setBorderColor('red');
            setColor('red');
        } else if (val.length < 6) {
            setPasswordValidError('Le mot de passe doit être de 6 caractères au minimum');
            setBorderColor('red');
            setColor('red');
        } else if (val.length <= 6) {
            setPasswordValidError('Mot de passe correct');
            setBorderColor('green');
            setColor('green');
        } else if (val.length > 20) {
            setPasswordValidError('Le mot de passe doit être de 20 caractères au maximum');
            setBorderColor('red');
            setColor('red');
        }
        else if (val.length < 20) {
            setPasswordValidError('Mot de passe correct');
            setBorderColor('green');
            setColor('green');
        }
    };

    const handleSubmit = () => {
        var emailValid = false;
        if (email.length == 0) {
            setEmailValidError("Email requis");
        }
        else if (email.length < 6) {
            setEmailValidError("Email mini 6 caractères");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailValidError('Un email ne peut pas contenir un espace');
        }
        else {
            setEmailValidError("")
            emailValid = true
        }

        var passwordValid = false;
        if (password.length == 0) {
            setPasswordValidError("Mot de passe requis");
        }
        else if (password.length < 6) {
            setPasswordValidError("Le mot de passe doit avoir minimum 6 caractères");
        } else if ( confirmPassword != password) {
            setConfirmPasswordValidError("Les deux mots de passe ne sont pas identique");
        }else if (password.indexOf(' ') >= 0) {
            setPasswordValidError('Le mot de passe ne doit pas contenir d espace');
        }
        else {
            setPasswordValidError("")
            passwordValid = true
        }

        if (emailValid && passwordValid) {
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigation.navigate('NextInscription')
        }
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.txtTitle}>Email</Text>
                <TextInput
                    style={{
                        borderColor: borderColor,
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
                        elevation: 5
                    }} placeholder="Entrez votre email"
                    returnKeyType="next"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
                    onFocus={() => setBorderColor('blue')}
                    theme={{ roundness: 10, colors: { primary: 'green', underlineColor: 'transparent' } }}
                />
                {emailValidError ? <Text style={{ color: 'red', marginTop: 5 }}>{emailValidError}</Text> : null}
                <Text style={styles.txtTitle}>Mot de passe</Text>
                <TextInput
                    style={{
                        borderColor: borderColor,
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
                        elevation: 5
                    }}
                    placeholder="Entrez votre mot de passe"
                    secureTextEntry={passwordVisible}
                    returnKeyType="next"
                    autoCapitalize="none"
                    value={password}
                    onChangeText={value => {
                        setPassword(value);
                    }}
                    onBlur={value => {
                        handleValidPassword(value);
                    }}
                    onFocus={() => setBorderColor('blue')}
                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                    theme={{ roundness: 10, colors: { primary: 'green', underlineColor: 'transparent' } }}
                />

                {passwordValidError ? <Text style={{ color: color, marginTop: 5 }}>{passwordValidError}</Text> : null}
                <Text style={styles.txtTitle}>Confirmation du mot de passe</Text>
                <TextInput
                    style={{
                        borderColor: borderColor,
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
                        elevation: 5
                    }}
                    placeholder="Entrez votre mot de passe"
                    secureTextEntry={passwordVisible}
                    returnKeyType="next"
                    autoCapitalize="none"
                    value={confirmPassword}
                    onChangeText={value => {
                        setConfirmPassword(value);
                        //handleConfirmPassword(value);
                    }}
                    onFocus={() => setBorderColor('blue')}
                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                    theme={{ roundness: 10, colors: { primary: 'green', underlineColor: 'transparent' } }}
                />

                {(confirmPassword == password && confirmPassword != 0) && <Text style={{ color: 'green', marginTop: 5 }}>Mots de passe identique</Text>}
                {(confirmPassword != password) && <Text style={{ color: 'red', marginTop: 5 }}>Les mots de passe ne sont pas identique </Text>}
                {(confirmPassword == 0 && password == 0) && <Text style={{ color: 'green', marginTop: 5 }}></Text>}


                <TouchableOpacity onPress={() => { handleSubmit() }}>
                    <Text style={styles.btnValidation}>Suivant       <Icon name="arrowright" size={30} /></Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default SignupScreen


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
        marginTop: 25,
        marginBottom: 8,
        fontWeight: 'bold'
    }
});