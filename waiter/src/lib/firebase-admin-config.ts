import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID?.replace(/\\n/gm, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n") ?? ""
    })
}

const config = require("../../waiter-253ed-firebase-adminsdk-smbit-995048b976.json");

export function customInitApp() {
    console.log("customappinit");
    console.log(firebaseAdminConfig);
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseAdminConfig);
    return app;
}

