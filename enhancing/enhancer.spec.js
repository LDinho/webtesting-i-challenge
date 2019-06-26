const enhancer = require('./enhancer.js');
const items = require('../items/items.js');

const {
  sword,
  rock,
  shoe,
} = items;

const {
  succeed,
  fail,
  repair,
} = enhancer;

describe('the enhancer', () => {

  describe('the repair function', () => {

    it('should return a new item', () => {
      const result = repair(rock);

      expect(result).not.toBe(rock);
    });

    it('should restore item durability to 100', () => {

      // arrange - example data (this is already imported from items)

      // Do not need to set new item object, just pass
      //  the item directly in the repair function

      // act

      // Do not need to set new item object, just pass
      //  the item directly in the repair function
      const result = repair(sword);

      //assert
      expect(result.durability).toBe(100);

    });

  });

});
