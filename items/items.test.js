const { success, fail, repair } = require("./items").enhancer;

const items = {
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
      const knightHelmet = {
        name: "Knight Helmet",
        displayName: "[PRI] Knight Helmet",
        type: "armor",
        durability: 20,
        enhancement: 16
      };
      expect(fail(knightHelmet)).not.toEqual(knightHelmet);
    });
    it("decreases durability by 10 if enhancement is greater than 14", () => {
      const greatShield = {
        name: "Great Shield",
        displayName: "[DUO] Great Shield",
        type: "armor",
        durability: 50,
        enhancement: 17
      };
      expect(fail(greatShield).durability).toEqual(40);
    });
    it("decreases durability by 5 if enhancement is less-than-or-equal-to 14", () => {
      const broadsword = {
        name: "Broadsword",
        displayName: "Broadsword",
        type: "weapon",
        durability: 80,
        enhancement: 10
      };
      expect(fail(broadsword).durability).toEqual(75);
    });
    it("decreases the enhancement level by 1 if its level is greater than 16", () => {
      const greatShield = {
        name: "Great Shield",
        displayName: "[DUO] Great Shield",
        type: "armor",
        durability: 50,
        enhancement: 17
      };
      expect(fail(greatShield).enhancement).toBe(16);
    });
    it("updates the displayName of the item with the newly decreased level", () => {
      const greatShield = {
        name: "Great Shield",
        displayName: "[DUO] Great Shield",
        type: "armor",
        durability: 50,
        enhancement: 17
      };
      expect(fail(greatShield).displayName).toBe("[PRI] Great Shield");
    });
    it("tests fail() method with varous bad inputs", () => {
      expect(fail("string")).toBeNull();
      expect(fail(null)).toBeNull();
      expect(fail(undefined)).toBeNull();
      expect(fail([])).toBeNull();
      expect(fail({})).toBeNull();
      expect(fail(1)).toBeNull();
    });
  });
  describe("repair() method", () => {
    it("repairs an item's durability to 100", () => {
      const knightHelmet = {
        name: "Knight Helmet",
        displayName: "[PRI] Knight Helmet",
        type: "armor",
        durability: 20,
        enhancement: 16
      };
      const broadsword = {
        name: "Broadsword",
        displayName: "Broadsword",
        type: "weapon",
        durability: 80,
        enhancement: 10
      };
      expect(repair(knightHelmet)).toMatchObject({
        ...knightHelmet,
        durability: 100
      });
      expect(repair(broadsword).durability).toEqual(100);
    });
    it("tests repair() method with varous bad inputs", () => {
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

*/
