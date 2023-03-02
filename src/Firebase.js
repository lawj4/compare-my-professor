// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, push } from "firebase/database";
import { getAuth } from "firebase/auth";



function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoxepJlqYXT4e9Q_xstE0tifmdb26F4Ak",
  authDomain: "compare-my-professor.firebaseapp.com",
  projectId: "compare-my-professor",
  storageBucket: "compare-my-professor.appspot.com",
  messagingSenderId: "452712035711",
  appId: "1:452712035711:web:c48fe3a97b52148b68964a",
  measurementId: "G-WL4J74MJV9",
  databaseURL: "https://compare-my-professor-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function writeCourseData(courseName, professorName) {
  const db = getDatabase(app);
  const reference = ref(db, courseName.toUpperCase()+"/"+toTitleCase(professorName));
  set(reference, 
    {
      mmr: 1000,
      comparisons: 0
    });
}







export function addProfessor(courseName, professorName) {
    courseName = courseName.toUpperCase();
    professorName = toTitleCase(professorName);
    
  const db = getDatabase();
  const reference = ref(db, "uci/ics/" + courseName+"/"+professorName);
    get(reference).then((snapshot) => {
        if (snapshot.exists()) {
            // alert("That combination already exists.")
        } else {
            console.log('new');
            set(reference, 
                {
                mmr: 1000,
                comparisons: 0
              }
            );
        }
    });
    
  
}
