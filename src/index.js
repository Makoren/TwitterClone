import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './HomeScreen';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8YxQEq1gwv85hxbtkeBA07DabMPuda9g",
  authDomain: "twitter-clone-5f8b5.firebaseapp.com",
  projectId: "twitter-clone-5f8b5",
  storageBucket: "twitter-clone-5f8b5.appspot.com",
  messagingSenderId: "172413252916",
  appId: "1:172413252916:web:079c6825427783d94fa161"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <HomeScreen />,
  document.getElementById('root')
);
