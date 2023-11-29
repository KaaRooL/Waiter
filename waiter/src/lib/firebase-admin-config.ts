import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID?.replace(/\\n/gm, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n") ?? ""
    })
}


export function customInitApp() {
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseAdminConfig);
    return app;
}

