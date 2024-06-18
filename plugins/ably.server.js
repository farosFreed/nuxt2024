// Server-side Ably plugin
import Ably from "ably";

export default defineNuxtPlugin(async (nuxtApp) => {
  // Get runtime config on server
  const config = useRuntimeConfig();
  // Connect to Ably with your API key
  // TODO this is maybe basic auth, not token with secret key?
  // TODO understand nuxt plugin config, ssr setting on plugin config etc.
  // TODO understand when middleware runs

  // TODO REENABLE
  // https://ably.com/docs/api/realtime-sdk
  // let ably = new Ably.Realtime({
  //   key: `${config.ablySecret}`, // process.env.ABLY,
  //   echoMessages: false,
  // });
  // nuxtApp.provide("ably", ably); // Injecting ably into the context?

  // TODO move this logic somewhere
  //create uniqueId's to assign to clients on auth
  // const uniqueId = function () {
  //   return "id-" + totalPlayers + Math.random().toString(36).substr(2, 16);
  // };
  // // implement token auth path
  // app.get("/auth", (request, response) => {
  //   const tokenParams = { clientId: uniqueId() };
  //   realtime.auth.createTokenRequest(tokenParams, function (err, tokenRequest) {
  //     if (err) {
  //       response
  //         .status(500)
  //         .send("Error requesting token: " + JSON.stringify(err));
  //     } else {
  //       response.setHeader("Content-Type", "application/json");
  //       response.send(JSON.stringify(tokenRequest));
  //     }
  //   });
  // });

  // Setup channels

  // TODO remove?
  // Close the connection to Ably after a 5 second delay
  // setTimeout(async () => {
  //   ably.connection.close();
  //   await ably.connection.once("closed", function () {
  //     console.log("Closed the connection to Ably.");
  //   });
  // }, 5000);
});
