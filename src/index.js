const AkkaServerless = require("@lightbend/akkaserverless-javascript-sdk").AkkaServerless;

const server = new AkkaServerless();
server.addComponent(require("./myeventsourcedentity"));
server.addComponent(require("./myeventsourcedview"));
server.addComponent(require("./myvalueentity"));
server.addComponent(require("./myvalueview"));
server.addComponent(require("./myaction"));

server.start();
