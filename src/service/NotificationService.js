const admin = require("../../utils/firebase");

class NotificationService {
  static async sendNotification(token, title, body) {
    const message = {
      notification: {
        title: title,
        body: body,
      },
      token: token,
    };

    try {
      const response = await admin.messaging().send(message);
      console.log("Successfully sent message:", response);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }

  static async sendMultipleNotifications(token, title, body) {
    const messages = token.map((token) => ({
      notification: {
        title: title,
        body: body,
      },
      token: token,
    }));

    try {
      const response = await admin.messaging().sendEach(messages);
      console.log("Successfully sent message:", response);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}

module.exports = NotificationService;
