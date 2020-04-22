import * as firebase from "firebase";
import axios from "axios";
import { AsyncStorage } from "react-native";

try{
    firebase.initializeApp({
        apiKey: "AIzaSyCeux7stATTFyPU7pugF7Ko9bCRKWfbmMo",
        authDomain: "food-magazine-6e38c.firebaseapp.com",
        databaseURL: "https://food-magazine-6e38c.firebaseio.com",
        projectId: "food-magazine-6e38c",
        storageBucket: "food-magazine-6e38c.appspot.com",
        messagingSenderId: "367169216825",
        appId: "1:367169216825:web:b7e68a9e5802516b8b88e8",
        measurementId: "G-0Z14QWEXY7"
    })
}catch(error){
    console.log(error);
}

export let signUpSuccess = false;

export const signUpUser = async(email,password) =>{
    await firebase.auth().createUserWithEmailAndPassword(email,password).then(cred =>{
        const user = {
            email: email,
            id: cred.user.uid,
            favourites: [{
                foodName: "null"
            }],
            userName: "user" + Math.floor((Math.random() * 1000) + 1)
        }
        axios.post("https://us-central1-food-magazine-6e38c.cloudfunctions.net/CreateUser",{user: user});
        signUpSuccess = true;
    }).catch(error =>{
        alert(error)
        signUpSuccess = false;
    })
}

export let signInSuccess = false; 

export const registerUser = async(email,password) =>{
    await firebase.auth().signInWithEmailAndPassword(email,password).then((user) =>{
        signInSuccess = true;
    }).catch(error =>{
        alert(error)
        signInSuccess = false;
    });
}