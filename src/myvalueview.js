const View = require("@lightbend/akkaserverless-javascript-sdk").View;

const entity = new View(
  ["myvalueview.proto"],
  "com.example.MyServiceValueView",
  {
    viewId: "value_things",
    includeDirs: ["./proto"]
  }
);

module.exports = entity;
