import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity,TextInput,Image} from 'react-native';
import PasswordInput from '../components/PassInput';
import { AuthContainer,useAuth } from '../Auth';
import Textinp from '../components/Textinp';
// import {AuthContainer, useAuth} from '../../Auth';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const onLogin = (email, password) => auth.signIn(email, password);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Fitness Pal</Text>
      <Image source={require('../utils/undraw_working_out_6psf.png')} style={{height:110,width:210}}/>
      <Textinp
        marginTop={50}
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
          onLogin(email, password);
        }}><Text style={styles.textStyle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize:15,margin:30}}>Don't have an account? Signup</Text>
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
  text:{
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'center',
    marginBottom:10,
}
});

export default Login;