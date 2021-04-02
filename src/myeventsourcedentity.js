const EventSourcedEntity = require("@lightbend/akkaserverless-javascript-sdk").EventSourcedEntity;

const entity = new EventSourcedEntity(
  [
    "myeventsourcedentity.proto"
  ],
  "com.example.MyServiceEventSourcedEntity",
  "eventsourced_things",
  {
    includeDirs: ["./proto"],
    serializeFallbackToJson: true
  }
);

entity.setInitial(entityId => ({}));

entity.setBehavior(state => {
  return {
    commandHandlers: {
      SetData: setData,
      GetData: getData
    },
    eventHandlers: {
      Thing: newDataSet
    }
  };
});

// handle commands
function setData(command, state, ctx) {
  // protobuf defined where incoming request message is the event data
  ctx.emit(command);
  return {};
}

function getData(command, state, ctx) {
  return state.data;
}

// handle events
function newDataSet(newData, state) {
  console.log(state);
  console.log(newData);
  state = newData
  return state;
}
module.exports = entity;