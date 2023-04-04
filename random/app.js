import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const email = document.getElementById('email');

const pass = document.getElementById('pass');

const button = document.getElementById('button').addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, email.value, pass.value);
    .then((response) => { 
        console.log(response);
    })
    .catch((error) => {
        alert(error);
    });
});
