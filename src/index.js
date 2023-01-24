import React from 'react';
import {createRoot} from 'react-dom'
import './index.css';
import App from './App/App';
import {createStore} from "redux";
import {Provider} from "react-redux";

export const defaultState = {

    login: '',
    password: '',
    subscription: '',

    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    email: '',
    gender: '',
    isOver18: false,

    cardNumber: '',
    nameOfCard: '',
    expireDate: '',

    consent: false,
    cookie: false,

}
const reducer = (state = defaultState, action) =>{

    switch (action.type){
        case 'UPDATE_LOGIN':
            return {...state, login: action.payload}
        case 'UPDATE_PASSWORD':
            return {...state, password: action.payload}
        case 'UPDATE_SUBSCRIPTION':
            return {...state, subscription: action.payload}
        case 'UPDATE_FIRST_NAME':
            return {...state, firstName: action.payload}
        case 'UPDATE_LAST_NAME':
            return {...state, lastName: action.payload}
        case 'UPDATE_MIDDLE_NAME':
            return {...state, middleName: action.payload}
        case 'UPDATE_BIRTHDATE':
            return {...state, birthDate: action.payload}
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload}
        case 'UPDATE_GENDER':
            return {...state, gender: action.payload}
        case 'UPDATE_IS_OVER_18':
            return {...state, isOver18: action.payload}
        case 'UPDATE_CREDIT':
            return {...state, cardNumber: action.payload}
        case 'UPDATE_CREDIT_CARD_NAME':
            return {...state, nameOfCard: action.payload}
        case 'UPDATE_EXPIRE_DATE':
            return {...state, expireDate: action.payload}
        case 'UPDATE_CONSENT':
            return {...state, consent: action.payload}
        case 'UPDATE_COOKIE':
            return {...state, cookie: action.payload}

        default:
            return state
    }
}

const store = createStore(reducer);

const domNode = document.getElementById('root');
const navRoot = createRoot(domNode);
navRoot.render(
    <Provider store={store}>
        <App />
    </Provider>
);



