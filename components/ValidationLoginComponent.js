import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"
import { TextInput as TextInputEye } from 'react-native-paper';



    const [text, setText] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');

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

        const handleSubmit = () => {
            var emailValid = false;
            if(email.length == 0){
                setEmailValidError("Email requis");
            }        
            else if(email.length < 6){
                setEmailValidError("Email mini 6 caractères");
            }      
            else if(email.indexOf(' ') >= 0){        
                setEmailValidError('Un email ne peut pas contenir un espace');                          
            }    
            else{
                setEmailValidError("")
                emailValid = true
            }
    
            var passwordValid = false;
            if(password.length == 0){
                setPasswordValidError("Mot de passe requis");
            }        
            else if(password.length < 6){
                setPasswordValidError("Le mot de passe doit avoir minimum 6 caractères");
            }      
            else if(password.indexOf(' ') >= 0){        
                setPasswordValidError('Le mot de passe ne doit pas contenir d espace');                          
            }    
            else{
                setPasswordValidError("")
                passwordValid = true
            }        
        
            if(emailValid && passwordValid){            
                alert('Bienvenue ' + email  +' !'); 
                //setEmail("");
                //setPassword("");
                //setConfirmPassword("");
                navigation.navigate('Accueil')
                 //navigate('NextInscription');
            }       
          }

          
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
