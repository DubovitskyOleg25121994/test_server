const amqp = require("amqplib/callback_api");
const config = require("../configs/config");
const api = config.api;
const getFakeUrlFromApi = require("../fakeApi/index");

console.log("getFakeUrlFromApi", getFakeUrlFromApi);

module.exports = amqp.connect(api, (error0, connection) => {
  if (error0) {
    console.log("[ connect  err]", error0);
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      console.log("[ createChannel  err]", error1);
    }
    const queue = "task_queue";
    const images = JSON.stringify(getFakeUrlFromApi);

    channel.assertQueue(queue, {
      durable: true
    });
    channel.sendToQueue(queue, Buffer.from(images), {
      persistent: true
    });
    console.log(" [x] Sent '%s'", images);
  });
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});
