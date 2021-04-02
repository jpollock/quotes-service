/*
 * Copyright 2019 Lightbend Inc.
 */

const ValueEntity = require("@lightbend/akkaserverless-javascript-sdk").ValueEntity;

const entity = new ValueEntity(
  [
    "myvalueentity.proto"
  ],
  "com.example.MyServiceValueEntity",
  "value_things",
  {
    includeDirs: ["./proto"],
    serializeFallbackToJson: true
  }
);


const pkg = "com.example.";
const Thing = entity.lookupType(pkg + "Thing");

entity.initial = (entityId) => Thing.create({thing_id: entityId});

entity.commandHandlers = {
  SetData: setData,
  GetData: getData
}
function setData(update, state, ctx) {
  update.thingId = ctx.entityId;
  ctx.updateState(Thing.create(update));
  return {};
}

function getData(request, thing) {
  return thing.data;
}

// Export the entity
module.exports = entity;
