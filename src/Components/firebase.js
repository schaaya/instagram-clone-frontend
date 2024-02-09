import firebase from "firebase";

firebase.initializeApp({
  apiKey: "xxxx",
  authDomain: "instaclone-fdf94.firebaseapp.com",
  projectId: "instaclone-fdf94",
  storageBucket: "instaclone-fdf94.appspot.com",
  messagingSenderId: "746249648211",
  appId: "1:746249648211:web:dbbf842b438cb3877aaea6"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};

