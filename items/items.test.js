const { success, fail, repair } = require("./items").enhancer;

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
    durability: 20,
    enhancement: 16
  },
  greatShield: {
    name: "Great Shield",
    displayName: "[+15] Great Shield",
    type: "armor",
    durability: 50,
    enhancement: 17
  }
};

describe("enhancer library", () => {
  describe("success() method", () => {
    // Build out
  });
  describe("fail() method", () => {
    // Build out
    it("takes in an item that has failed enhancement and returns a newly downgraded item", () => {
      expect(fail(items.greatShield).durability).toEqual(40);
    });
  });
  describe("repair() method", () => {
    it("takes in an item and returns it fully repaired", () => {
      expect(repair(items.knightHelmet)).toMatchObject({
        ...items.knightHelmet,
        durability: 100
      });
      expect(repair(items.broadsword).durability).toEqual(100);
    });
    // it("tests method with varous bad inputs", () => {
    //   expect(repair("string")).toBeNull();
    //   expect(repair(null)).toBeNull();
    //   expect(repair(undefined)).toBeNull();
    //   expect(repair([])).toBeNull();
    //   expect(repair({})).toBeNull();
    //   expect(repair(1)).toBeNull();
    // });
  });
});

/*

const item = {
  name,
  displayName,
  type, (weapon or armor)
  durability, (starts of 100)
  enhancement (start at 0, max of PEN = 20)
}

*/
