import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { AuthContainer,useAuth } from '../Auth.js';
import Textinp from '../components/Textinp.js';
import PasswordInput from '../components/PassInput.js';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sport, setSport] = useState('');
  const [name, setName] = useState('');
  const countries = ["Cricket","Football"]

  const auth = useAuth();
  const onRegister = (name, email, password,sport) =>
    auth.register(name, email, password,sport);

  return (
    <View style={styles.container}>
      <Textinp
        marginTop={10}
        iconShape="person"
        placeholder="Name"
        autoComplete="name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholderTextColor="black"
      />
      <View style={styles.Dropdown}>
      <MaterialIcons name='sports-cricket' size={20} color="#393E46"  style={{paddingLeft:10}}/>
      <Text style={{marginLeft:10,fontSize:16,fontWeight:'bold',color:'black'}}>Sport </Text>
        <SelectDropdown dropdownBackgroundColor="white"
          defaultButtonText='Select a Sport'
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setSport(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
      </View>
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
          onRegister(name, email, password, sport);
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
  Dropdown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('85%'),
    borderRadius: 10,
    height: 60,
    marginTop:25,
},

});

export default SignUp;