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

      // arrange - example data (this is imported from items)

      // act

      // Do not need to set new item object, just pass
      //  the item directly in the repair function

      const result = repair(sword);

      //assert
      expect(result.durability).toBe(100);

    });

  });

  describe('the succeed fn', () => {

    it('should return new item', () => {
      const result = succeed(shoe);

      expect(result).not.toBe(shoe);
    });

    it('should increase enhancement by 1 if less than 20', () => {
      const result = succeed(rock);

      expect(result.enhancement).toBe(rock.enhancement + 1);
    });

    it('should return 20 if current enhancement is 20', () => {
      const result = succeed(shoe);

      expect(result.enhancement).not.toBeGreaterThan(20);
    });

    it('should not change durability', () => {
      const result = succeed(shoe);

      expect(result.durability).toBe(shoe.durability);
    });
  });

});
