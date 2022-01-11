import { auth } from "../firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

export async function AnonymousSignIn (){
    signInAnonymously(auth)
        .then(() => {
            console.log('signed in')
            return true;
        })
        .catch((error) => {
            return false;
        })
}
export const Authenticate = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return true;
        } else {
            return false;
        }
    });
}