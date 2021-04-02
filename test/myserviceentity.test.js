import { MockEventSourcedEntity } from "./testkit.js";
import { expect } from "chai";
import myserviceentity from "../src/myserviceentity.js";

describe("MyServiceEntity", () => {
  const entityId = "entityId";
  
  describe("SetValue", () => {
    it("should...", () => {
      const entity = new MockEventSourcedEntity(myserviceentity, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("SetValue", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
  
  describe("GetValue", () => {
    it("should...", () => {
      const entity = new MockEventSourcedEntity(myserviceentity, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("GetValue", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
});