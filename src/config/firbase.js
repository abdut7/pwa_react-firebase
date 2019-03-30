import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCO2gD7ONQ-L-EgbEfuGU91Ol4bKA61Rrw",
    authDomain: "pwafc-d538d.firebaseapp.com",
    databaseURL: "https://pwafc-d538d.firebaseio.com",
    projectId: "pwafc-d538d",
    storageBucket: "pwafc-d538d.appspot.com",
    messagingSenderId: "374712306388"
};
var fire=firebase.initializeApp(config);
export default fire;
