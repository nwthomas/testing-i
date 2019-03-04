//=========================== Success
/*

- Takes item and returns new item
- Enhancements start at 0
- Maximum possible enhancements is PEN (20)
- Enhancing armor up to 5 cannot fail
- Enhanving weapon up to 7 cannot fail
- Durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +15
- Durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET


*/

//=========================== Fail
/*

- Takes item and returns new item


*/

//=========================== Repair
/*

- Takes item and returns new item with durability restored to 100


*/

//=========================== Item Model
/*

const item = {
  name,
  type, (weapon or armor)
  durability, (starts of 100)
  enhancement (start at 0, max of PEN = 20)
}

*/
