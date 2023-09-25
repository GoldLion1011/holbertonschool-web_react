import * as notiData from '../data/notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalizedData = normalize(notiData.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const notifications = Object.values(normalizedData.entities.notifications || {});
  
  const userNotifications = notifications.filter((item) => item.author === userId);

  return userNotifications.map((item) => item.context);
};

export default getAllNotificationsByUser;
