const admin = require('firebase-admin');
const serviceAccount = require('../config/gpa-findmepet-firebase-adminsdk-scfnv-5012db35d3.json');

/**
 *
 */
exports.setup = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

exports.sendNotification = (deviceId, notificacion, data) => {
  const message = { notification, data };
  admin.messaging().sendToDevice(deviceId, message);
};
