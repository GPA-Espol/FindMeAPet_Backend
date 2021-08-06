const admin = require('firebase-admin');
const serviceAccount = require('../config/gpa-findmepet-firebase-adminsdk-scfnv-5012db35d3.json');
const { tipoNotificacion } = require('./tipo_notificacion');

/**
 * Method to intialize firebase app
 */
exports.setup = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  this.sendNotification();
};

/**
 * Method to send a notification to the specified device Id
 * @param {string} deviceId id of the device
 * @param {{title: string, body:string}} notificacion data of the notification that will be
 * displayed on the device,
 * @param {{notifType: number, ...}} data The data of the notification
 */
exports.sendNotification = (deviceId, notification, data) => {
  const message = { notification, data };
  admin.messaging().sendToDevice(deviceId, message);
};
