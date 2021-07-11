const Hoek = require("@hapi/hoek");
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: "localhost",
  });

  server.events.on("log", (event) => console.log(event.data));

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hi";
    },
  });

  server.route({
    method: "GET",
    path: "/hoek",
    handler: (request, h) => {
      let array = [1, [2, 3]];
      return Hoek.flatten(array);
    },
  });

  await server.start();
  server.log("info", `Server starting at  ${server.info.uri}`);
};

init();
