// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
} from "firebase/auth";
import { 
    addDoc,
    collection,
    getFirestore 
} from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNIlrkq2NEOG1jlqTBb5CjxczXvtue_SA",
  authDomain: "netflix-clone-40ed1.firebaseapp.com",
  projectId: "netflix-clone-40ed1",
  storageBucket: "netflix-clone-40ed1.firebasestorage.app",
  messagingSenderId: "982576969706",
  appId: "1:982576969706:web:abe257070c8dcf05ca6493",
  measurementId: "G-FMMJ6QXPSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signUp=async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        console.log(user);
        await addDoc(collection(db,"users"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        });
        console.log("User added to firestore");
    }catch(error){
        console.log(error.message);
        toast(error.code.split("/")[1].split("-").join(" "));

    }
}
const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
        
    }catch(error){
        console.log(error.message);
        toast(error.code.split("/")[1].split("-").join(" "));
    }
}
const logout=async()=>{
     signOut(auth);
}

export {auth,db,signUp,login,logout};