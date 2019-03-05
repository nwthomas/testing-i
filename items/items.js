module.exports = {
  enhancer: {
    success(item) {
      let { name, displayName, type, durability, enhancement } = { ...item };
      if (typeof item === "object" && item && item.name) {
        if (enhancement <= 14 && durability < 25) return item; // Enhancements only work if level 15 or higher and durability below 25
        if (enhancement >= 15 && durability < 10) return item; // Can't enhance if enhancement >= 15 and durability < 10
        enhancement += 1; // Update enhancement level
        displayName = `${enhanceLevels[enhancement]} ${name}`; // Update displayName per enhancement level
        return { name, displayName, type, durability, enhancement };
      } else {
        return null;
      }
    },
    fail(item) {
      // - Durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +15
      if (typeof item === "object" && item && item.name) {
        let { name, displayName, type, durability, enhancement } = { ...item };
        if (enhancement <= 5 && type === "armor") return item; // Keeps armor from failing up to level 5
        if (enhancement <= 7 && type === "weapon") return item; // Keeps weapon from failing up to level 7
        enhancement <= 14 && durability >= 25 && (durability = durability - 5); // Decreases durability by 5 if enhancement <= 14
        enhancement === 15 &&
          durability >= 30 &&
          (durability = durability - 10);
        enhancement > 15 && (durability = durability - 10); // Decreases durability by 10 if enhancement >= 15
        enhancement > 16 && (enhancement = enhancement - 1); // Decreases enhancement if enhancement > 16
        enhancement > 0
          ? (displayName = `${enhanceLevels[enhancement]} ${name}`)
          : (displayName = name); // If enhancement level is > 0, update namce using enhanceLevels object
        return { name, displayName, type, durability, enhancement };
      } else {
        return null;
      }
    },
    repair(item) {
      if (typeof item === "object" && item && item.name) {
        return { ...item, durability: 100 };
      } else {
        return null;
      }
    }
  }
};

const enhanceLevels = {
  1: "[+1]",
  2: "[+2]",
  3: "[+3]",
  4: "[+4]",
  5: "[+5]",
  6: "[+6]",
  7: "[+7]",
  8: "[+8]",
  9: "[+9]",
  10: "[+10]",
  11: "[+11]",
  12: "[+12]",
  13: "[+13]",
  14: "[+14]",
  15: "[+15]",
  16: "[PRI]",
  17: "[DUO]",
  18: "[TRI]",
  19: "[TET]",
  20: "[PEN]"
};

/*

- Durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +15
- Durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET

*/
