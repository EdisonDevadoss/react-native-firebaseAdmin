const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports = module.exports = functions.database.ref("users").onCreate(
  (snapshot, context) =>
    new Promise((resolve, reject) => {
      console.log("log in cloud functions: ", snapshot);
      console.log("log in cloud functions context: ", context);
      console.log("log in cloud functions context: ", context.params);
      // return admin
      //   .firestore()
      //   .collection("users")
      //   .doc(context.params.userUid)
      //   .get();
    })
);
