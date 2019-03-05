const { success, fail, repair } = require("./items").enhancer;

const items = {
  broadsword: {
    name: "Broadsword",
    displayName: "Broadsword",
    type: "weapon",
    durability: 80,
    enhancement: 10
  },
  knightHelmet: {
    name: "Knight Helmet",
    displayName: "[PRI] Knight Helmet",
    type: "armor",
    durability: 20,
    enhancement: 16
  },
  greatShield: {
    name: "Great Shield",
    displayName: "[DUO] Great Shield",
    type: "armor",
    durability: 50,
    enhancement: 17
  },
  dagger: {
    name: "Dagger",
    displayName: "Dagger",
    type: "weapon",
    durability: 100,
    enhancement: 0
  }
};

describe("enhancer library", () => {
  describe("success() method", () => {
    // Build out
  });
  describe("fail() method", () => {
    it("checks if returned item is different from original one", () => {
      expect(fail(items.knightHelmet)).not.toEqual(items.knightHelmet);
    });
    it("decreases durability by 10 if enhancement is greater than 14", () => {
      expect(fail(items.greatShield).durability).toEqual(40);
    });
    it("decreases durability by 5 if enhancement is less-than-or-equal-to 14", () => {
      expect(fail(items.broadsword).durability).toEqual(75);
    });
    it("decreases the enhancement level by 1 if its level is greater than 16", () => {
      expect(fail(items.greatShield).enhancement).toBe(16);
    });
    it("updates the displayName of the item with the newly decreased level", () => {
      expect(fail(items.greatShield).displayName).toBe("[PRI] Great Shield");
    });
  });
  describe("repair() method", () => {
    it("repairs an item's durability to 100", () => {
      expect(repair(items.knightHelmet)).toMatchObject({
        ...items.knightHelmet,
        durability: 100
      });
      expect(repair(items.broadsword).durability).toEqual(100);
    });
    it("tests fail() method with varous bad inputs", () => {
      expect(repair("string")).toBeNull();
      expect(repair(null)).toBeNull();
      expect(repair(undefined)).toBeNull();
      expect(repair([])).toBeNull();
      expect(repair({})).toBeNull();
      expect(repair(1)).toBeNull();
    });
  });
});

/* 

The three things you need to do in a test:
Arrange
Act - execute system in a test
Assert

Item model for this assignment
const item = {
  name,
  displayName,
  type, (weapon or armor)
  durability, (starts of 100)
  enhancement (start at 0, max of PEN = 20)
}

*/
