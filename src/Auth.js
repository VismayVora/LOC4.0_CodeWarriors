import React, { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './utils/api';
const AuthContext = React.createContext();

const AUTHENTICATED = 'AUTHENTICATED';
const TOKEN = 'access_token';
const USER_NAME='username';

// Create a wrapper function for communicating with the API
const registerUser = async (name, email, password, sport) => {
  await AsyncStorage.setItem(USER_NAME, name);
  var requestOptions = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
    body:JSON.stringify({
        "email": email,
        "name": name,
        "password": password,
        "sport": "CKT"
      }) ,
  };

  fetch(BASE_URL+"/register/", requestOptions)
    .then(response => response.text())
    .then((result) => {
      console.log(result);
      AsyncStorage.setItem(TOKEN, result);
    })
    .catch(error => console.log('error', error));
}

const currentUser = async (token) => {

  var requestOptions = {
    method:'POST',
    headers:{
      "Authorization":`${token}`
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    }),
    redirect: 'follow'
  };

}

const loginUser = (email, password) => {
  var requestOptions = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
    },
    body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    redirect: 'follow'
  };

  fetch(BASE_URL+"/login/", requestOptions)
    .then(response => response.text())
    .then((result) => {
      console.log(result);
      AsyncStorage.setItem(TOKEN, result);
    })
    .catch(error => console.log('error', error));
}

// The app container, should handle the state of a user being authenticated or not
export const AuthContainer = (props) => {
  const [authState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // Handle the AUTHENTICATED action and set the state to be authenticated
        case AUTHENTICATED:
          return {
            ...state,
            authenticated: true,
            
          };
        default:
          throw new Error(`${action.type} is not a valid action type`);
      }
    },
    {
      authenticated: false,
      initialized: false,
    },
  );

  // Memoize this facade since it shouldn't be recreated every render
  const facade = useMemo(
    () => ({
      register: async (name, email, password, sport) => {
        try {
          const token = await registerUser(name, email, password, sport);

          // console.log(token);
          console.log("Hello");
          // await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
          // console.log("HelloAfter");

          dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },

      // First we're trying to fetch a token from encrypted storage here
      // Then we try to get the user associated with that token and resume the session
      resume: async () => {
        try {
          const token = await AsyncStorage.getItem(TOKEN);
          console.log("HelloToken");
          console.log(token);

          // When no token is found, don't try to fetch the user
          if (!token) {
            return;
          }

        //   await currentUser(token);

          // dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },
      signIn: async (email, password) => {
        try {
          const token = await loginUser(email, password);

          // console.log(token);
          console.log("Hello");
          // await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
          // console.log("HelloAfter");

          dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },

    }),
    [],
  );

  // This will trigger when the app is mounted for the first time
  useEffect(() => {
    facade.resume();
  });

  // This uses a render prop to pass the authState to the containers children
  return (
    <AuthContext.Provider value={facade}>
      {props.children(authState)}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);