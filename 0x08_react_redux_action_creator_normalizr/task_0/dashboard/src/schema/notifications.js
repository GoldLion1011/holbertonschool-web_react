import * as notiData from '../data/notifications.json';

const getAllNotificationsByUser = (userId) => {
  const notifications = notiData.default.filter((item) => item.author.id === userId);
  return notitifications.map((item) => item.context);
}

export default getAllNotificationsByUser;
