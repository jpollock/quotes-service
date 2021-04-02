const View = require("@lightbend/akkaserverless-javascript-sdk").View;

const entity = new View(
  ["myeventsourcedview.proto"],
  "com.example.MyServiceEventSourcedView",
  {
    viewId: "eventsourced_things",
    includeDirs: ["./proto"]
  }
);

module.exports = entity;
