'use strict';
const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
    projectId: 'firestore-playground-213614'
});

module.exports.onFirestoreChange = (event, cb) => {
    console.log(event);
    cb();
};