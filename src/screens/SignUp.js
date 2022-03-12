import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

// import {AuthContainer, useAuth} from '../../Auth';
import Textinp from '../components/Textinp.js';
import PasswordInput from '../components/PassInput.js';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sport, setSport] = useState('');

//   const auth = useAuth();
//   const onRegister = (name, contact, email, password) =>
//     auth.register(name, contact, email, password);

  return (
    <View style={styles.container}>
      {/* <Textinp
        marginTop={10}
        iconShape="person"
        placeholder="Name"
        autoComplete="name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholderTextColor="black"
      /> */}
      <Textinp
        marginTop={25}
        iconShape="sports-cricket"
        placeholder="Sport"
        // autoComplete="Sport"
        value={sport}
        onChangeText={text => {
          setSport(text);
        }}
        placeholderTextColor="black"/>
      <Textinp
        marginTop={25}
        iconShape="mail"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="black"/>
      <PasswordInput
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholderTextColor="black"
      />
      <TouchableOpacity
        onPress={() => {
        //   onRegister(name, email, password, contact);
        }}>
        <Text style={styles.textStyle}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    marginTop: 25,
    fontSize:20,
  },

});

export default SignUp;