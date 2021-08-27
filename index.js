'use strict'

const firebase = require('firebase/app')
require('firebase/storage')

const app = firebase.initializeApp({
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  projectId: 'xxxxxxxxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  messagingSenderId: 'xxxxxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
})
const storage = app.storage()

// Remember to disconnect the network before running
;(async () => {
  const ref = storage.ref('/image.png')
  const rtv = await ref.getMetadata()
  console.log(rtv)
  console.log('END')
})().catch(error => {
  console.log('EXCEPTION')
  if (error.stack) {
    console.error(error.stack)
  } else {
    console.error(error)
  }
}).finally(async () => {
  await app.delete()
})
