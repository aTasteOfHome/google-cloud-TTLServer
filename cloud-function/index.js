'use strict';
const _ = require('lodash');
const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
    projectId: 'firestore-playground-213614'
});

module.exports.onFirestoreChange = (event, cb) => {
    console.log(event);
    console.log(_.get(event, 'value.fields.field'));
    cb();
};