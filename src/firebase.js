import firebase from "firebase";
const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyBDns7CzX35k5go3DFUEVjYKGSGKHQ3PdE",
  authDomain: "linkedin-clone-c4f3d.firebaseapp.com",
  projectId: "linkedin-clone-c4f3d",
  storageBucket: "linkedin-clone-c4f3d.appspot.com",
  messagingSenderId: "351857476605",
  appId: "1:351857476605:web:a20f46fba577b64f56cf94"

    }
  );
  export const db=firebaseApp.firestore();
  export const auth=firebase.auth();
  export const storage=firebase.storage();
  
  export  {firebaseApp};