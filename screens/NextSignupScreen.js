import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const NextSignupScreen = ({navigation}) => {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

    const [country, setCountry] = useState('Unknown');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.txtTitle}>Civilité</Text>
            <View style={styles.dropDownStyle}>
                <Picker
                    selectedValue={country}
                    onValueChange={(value, index) => setCountry(value)}
                    mode="dropdown" // Android only

                >
                    <Picker.Item label="Choisissez votre civilité" value="" />
                    <Picker.Item label="Monsieur" value="Monsieur" />
                    <Picker.Item label="Madame" value="Madame" />
                    <Picker.Item label="Autre" value="Autre" />
                </Picker>
            </View>
            <Text style={styles.txtTitle}>Prénom</Text>
            <TextInput
                style={styles.textInput} placeholder="Entrez votre prénom"
                returnKeyType="next"
                autoCapitalize="none"
                theme={{ roundness: 10 }}
            />
            <Text style={styles.txtTitle}>Nom</Text>
            <TextInput
                style={styles.textInput} placeholder="Entrez votre nom"
                returnKeyType="next"
                autoCapitalize="none"
                theme={{ roundness: 10 }}
            />
            <Text style={styles.txtTitle}>Date de naissance</Text>
            <TouchableOpacity onPress={showPicker}>
                <Text
                    style={styles.pickerDateStyle}
                    placeholder="Entrez votre date de naissance"
                >
                    {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}

                </Text>
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

            <TouchableOpacity onPress={() => navigation.navigate('Success')}>
                <Text style={styles.btnValidation}>Terminé</Text>
            </TouchableOpacity>
        </View>
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