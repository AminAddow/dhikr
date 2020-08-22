import firebase from "../firebase";
import { useState, useEffect } from 'react';


const db = firebase.firestore();

function GetMorning() {
        const morningAdhkar = firebase.firestore().collection("morning")
              .orderBy("id");
    const [adhkar, setAdhkar] = useState([]);

        // Retrieve morning data from firestore
        useEffect(() => {
            morningAdhkar.limit(3)
              .onSnapshot(snap => {
                const adhkar = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAdhkar(adhkar)
            })
        }, []);
        return (
        <ul>
            {adhkar.map(dhikr => 
              <li key={dhikr.id}>
                  {dhikr.text}
              </li>
                )}
        </ul>
        )    
}



export default GetMorning



