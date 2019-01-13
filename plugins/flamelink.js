import * as flamelink from 'flamelink'

export default ({ app }) => {
  let firebaseApp

  if (process.server) {
    const admin = require('firebase-admin')

    if (!admin.apps.length) {
      const serviceAccount = require(process.env
        .FLAMELINK_PATH_TO_SERVICE_ACCOUNT)

      firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.FLAMELINK_DB_URL,
        storageBucket: process.env.FLAMELINK_STORAGE_BUCKET
      })
    } else {
      firebaseApp = admin.app()
    }
  } else {
    const firebase = require('firebase/app')
    require('firebase/auth')
    require('firebase/database')
    require('firebase/storage')

    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp({
        apiKey: process.env.FLAMELINK_API_KEY,
        authDomain: process.env.FLAMELINK_AUTH_DOMAIN,
        databaseURL: process.env.FLAMELINK_DB_URL,
        projectId: process.env.FLAMELINK_PROJECT_ID,
        storageBucket: process.env.FLAMELINK_STORAGE_BUCKET,
        messagingSenderId: process.env.FLAMELINK_MESSAGING_SENDER_ID
      })
    } else {
      firebaseApp = firebase.app()
    }
  }

  app.flamelink = flamelink({ firebaseApp, isAdminApp: process.server })
}
