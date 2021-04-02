const Action = require("@lightbend/akkaserverless-javascript-sdk").Action;


const action = new Action(
    [
      "myaction.proto"
    ],
    "com.example.MyServiceAction",
    {
      includeDirs: ["./proto"]
    }
  );


action.commandHandlers = {Hello: hello};

function hello(data, ctx) {
  return {text: "Do you want to play a game?"};
}

module.exports = action;