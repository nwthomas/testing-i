const { success, fail, repair } = require("./items").enhancer;

/*

const item = {
  name,
  displayName,
  type, (weapon or armor)
  durability, (starts of 100)
  enhancement (start at 0, max of PEN = 20)
}

*/

const items = {
  broadsword: {
    name: "Broadsword",
    displayName: "Broadsword",
    type: "weapon",
    durability: 80,
    enhancement: 0
  },
  knightHelmet: {
    name: "Knight Helmet",
    displayName: "[PRI] Knight Helmet",
    type: "armor",
    durabilty: 20,
    enhancement: 16
  },
  greatShield: {
    name: "Great Shield",
    displayName: "[+15] Great Shield",
    type: "armor",
    durabilty: 50,
    enhancement: 15
  }
};

describe("enhancer library", () => {
  describe("success() method", () => {
    // Build out
  });
  describe("fail() method", () => {
    // Build out
  });
  describe("repair() method", () => {
    it("takes in an item and returns it fully repaired", () => {
      expect(repair(items.knightHelmet)).toMatchObject({
        ...items.knightHelmet,
        durability: 100
      });
      expect(repair(items.broadsword).durability).toEqual(100);
    });
    it("tests method with varous bad inputs", () => {
      expect(repair("string")).toBeNull();
      expect(repair(null)).toBeNull();
      expect(repair(undefined)).toBeNull();
      expect(repair([])).toBeNull();
      expect(repair({})).toBeNull();
      expect(repair(1)).toBeNull();
    });
  });
});
