// "woah, free api key" --you probably

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBmXW6rQd6Rz1Ryk56A4jPaBk4tmtXy4zo",
    authDomain: "corecathx.firebaseapp.com",
    projectId: "corecathx",
    storageBucket: "corecathx.firebasestorage.app",
    messagingSenderId: "1008165068882",
    appId: "1:1008165068882:web:f8526c0f84c2cedbda3f8b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pageViewKey = "page_viewed";

async function updatePageView() {
    const ref = doc(db, "pageViews", "corecathx");
    const docSnap = await getDoc(ref);

    if (!document.cookie.includes(pageViewKey)) {
        if (docSnap.exists()) {
            await updateDoc(ref, { count: docSnap.data().count + 1 });
        } else {
            await setDoc(ref, { count: 1 });
        }
        document.cookie = `${pageViewKey}=true; max-age=86400; path=/`;
    }

    document.getElementById("page-views").innerText = (await getDoc(ref)).data().count;
    document.getElementById('wawascript').remove();
}

updatePageView();