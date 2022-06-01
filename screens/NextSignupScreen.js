import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const NextSignupScreen = ({ navigation }) => {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [dateError, setDateError] = useState('');

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

  

    const [civ, setCiv] = useState('');
    const [civError, setCivError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [birth, setBirth] = useState('');
    const [birthError, setBirthError] = useState('');
    const [borderColor, setBorderColor] = useState('#838383');
    const [color, setColor] = useState('red');

    const handleSubmit = () => {
        var civValid = false;
        if (civ == "") {
            setCivError("Civilité requise");
        }  else {
            civValid = true;
        }

        var firstNameValid = false;
        if (firstName.length == 0) {
            setFirstNameError("Prénom requis");
        } else {
            firstNameValid = true;
        }

        var lastNameValid = false;
        if (lastName.length == 0) {
            setLastNameError("Nom requis");
        } else {
            lastNameValid = true;
        }

        var dateValid = false;
        if (date.length == 0) {
            setDateError("Date de naissance requise");
        } else {
            dateValid = true;
        }

        if (civValid && firstNameValid && lastNameValid && dateValid) {
            alert('civilité: ' + civ + 'Prenom: ' + firstName+ 'Nom: ' + lastName + 'Date: ' + date); 
            setFirstName("");
            setLastName("");
            setCiv("");
            navigation.navigate('Success')
        }

    }


    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.txtTitle}>Civilité</Text>
                <View style={styles.dropDownStyle}>
                    <Picker
                        selectedValue={civ}
                        value={civ}
                        onValueChange={value => {
                            setCiv(value);
                        }}
                        mode="dropdown" // Android only

                    >
                        <Picker.Item label="Choisissez votre civilité" value="" />
                        <Picker.Item label="Monsieur" value="Monsieur" />
                        <Picker.Item label="Madame" value="Madame" />
                        <Picker.Item label="Autre" value="Autre" />
                    </Picker>
                </View>
                {civError ? <Text style={{ color: 'red', marginTop: 5 }}>{civError}</Text> : null}

                <Text style={styles.txtTitle}>Prénom</Text>
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
                    }} placeholder="Entrez votre prénom"
                    returnKeyType="next"
                    autoCapitalize="none"
                    value={firstName}
                    onChangeText={value => {
                        setFirstName(value);
                    }}
                    onFocus={() => setBorderColor('blue')}
                    theme={{ roundness: 10 }}
                />
                {firstNameError ? <Text style={{ color: 'red', marginTop: 5 }}>{firstNameError}</Text> : null}
                <Text style={styles.txtTitle}>Nom</Text>
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
                    }} placeholder="Entrez votre nom"
                    returnKeyType="next"
                    autoCapitalize="none"
                    value={lastName}
                    onChangeText={value => {
                        setLastName(value);
                    }}
                    onFocus={() => setBorderColor('blue')}
                    theme={{ roundness: 10 }}
                />
                {lastNameError ? <Text style={{ color: 'red', marginTop: 5 }}>{lastNameError}</Text> : null}

                <Text style={styles.txtTitle}>Date de naissance</Text>
                <TouchableOpacity onPress={showPicker}>
                    <Text
                        style={styles.pickerDateStyle}
                        placeholder="Entrez votre date de naissance"
                        value={date}
                    >
                        {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}

                    </Text>
                    {dateError ? <Text style={{ color: 'red', marginTop: 5 }}>{dateError}</Text> : null}

                </TouchableOpacity>

                {isPickerShow && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        locale="fr-FR"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                        style={styles.datePicker}
                    />
                )}

                <TouchableOpacity onPress={() => { handleSubmit() }}>
                    <Text style={styles.btnValidation}>Terminé</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default NextSignupScreen


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
    },
    pickerDateStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        height: 50,
        width: 130,
        borderColor: '#838383',
        borderWidth: 2,
        paddingHorizontal: 15,
        marginTop: 5,
        paddingTop: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
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

    dropDownStyle: {
        fontSize: 17,
        height: 50,
        width: 260,
        borderColor: '#838383',
        borderWidth: 2,
        paddingHorizontal: 5,
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
});