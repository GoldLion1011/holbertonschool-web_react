import * as notiData from '../data/notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// normalize the data
const normalizedData = normalize(notiData.default, [notification]);

// get all notifications by user
const getAllNotificationsByUser = (userId) => {
  const { entities } = normalizedData;
  const { notifications } = entities;
  const userNotifications = [];
  for (const key in notifications) {
    if (notifications[key].author === userId) {
      userNotifications.push(notifications[key]);
    }
  }
  return userNotifications;
};

// normalizes data with created schema
const notificationsNormalizer = (data) => normalize(data, [notification]);

export default { getAllNotificationsByUser, notificationsNormalizer };
