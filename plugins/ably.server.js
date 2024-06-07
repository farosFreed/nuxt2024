// Server-side Ably plugin
import Ably from "ably";
// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

export default defineNuxtPlugin((nuxtApp) => {
  // Get runtime config on server
  const config = useRuntimeConfig();
  console.log("config.ablySecret", config.ablySecret);
  // Connect to Ably with your API key
  // TODO this is maybe basic auth, not token with secret key?
  // TODO understand nuxt plugin config, ssr setting on plugin config etc.
  // TODO understand when middleware runs

  let ably = new Ably.Realtime({
    key: `${config.ablySecret}`, // process.env.ABLY,
    // clientId: "nuxt-app", //optional
  });
  nuxtApp.provide("ably", ably); // Injecting ably into the context?

  // TODO put here or elsewhere?
  // Create a channel called 'get-started' and register a listener to subscribe to all messages with the name 'first'
  // const channel = ably.channels.get("get-started");
  // await channel.subscribe("first", (message) => {
  //   console.log("Message received: " + message.data);
  // });

  // // Publish a message with the name 'first' and the contents 'Here is my first message!'
  // await channel.publish("first", "Here is my first message!");

  // // Close the connection to Ably after a 5 second delay
  // setTimeout(async () => {
  //   ably.connection.close();
  //   await ably.connection.once("closed", function () {
  //     console.log("Closed the connection to Ably.");
  //   });
  // }, 5000);
});
