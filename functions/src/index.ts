import * as functions from 'firebase-functions';
import { QuickChemServer } from './QuickChemServer';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const quickChemServer = new QuickChemServer()
quickChemServer.start(3000)

exports.app = functions.https.onRequest(quickChemServer.app)
