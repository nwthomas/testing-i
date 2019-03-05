module.exports = {
  enhancer: {
    success(item) {
      let { name, displayName, type, durability, enhancement } = { ...item };
      /*
      
      - Enhacement levels above 0 are displayed as [+n] up to 15 and the letters above that
      - Durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +15
      - If item enhacement is 14 or lower, the item cannot be enhanced if the durability is below 25
      - If the items' enchancement is 15 or higher, the item cannot be ehanced if the durability is below 10
      - If item enhacement is 14 or lower, the item cannot be enhanced if the durability is below 25
      - If the items' enchancement is 15 or higher, the item cannot be ehanced if the durability is below 10

      */
    },
    fail(item) {
      if (typeof item === "object" && item && item.name) {
        let { name, displayName, type, durability, enhancement } = { ...item };
        if (enhancement <= 5 && type === "armor") return item; // Keeps armor from failing up to level 5
        if (enhancement <= 7 && type === "weapon") return item; // Keeps weapon from failing up to level 7
        enhancement <= 14 && (durability = durability - 5); // Decreases durability by 5 if enhancement <= 14
        enhancement >= 15 && (durability = durability - 10); // Decreases durability by 10 if enhacement >= 15
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

//=========================== Success
/*

- Takes item and returns new item
- Enhancements start at 0
- Maximum possible enhancements is PEN (20)
- Enhancing armor up to 5 cannot fail
- Enhanving weapon up to 7 cannot fail
- Enhacement levels above 0 are displayed as [+n] up to 15 and the letters above that
- Durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +15
- Durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET


*/

//=========================== Fail
/*
  
  - DONE - Takes item and returns new item
  - DONE - Durability of the item is decreased by 5 if the item's enhancement is 0-14
  - DONE - Durability of the item is decreased by 10 if the item's enhancement is greater than 14
  - DONE - If enhancement level is greater than 16, the enhancement level decreases by 1.
  - DONE - Name is update with new level
  
*/
