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
      const newRock = { ...rock };
      const result = repair(newRock);

      expect(result).not.toBe(newRock);
    });

    it('should restore item durability to 100', () => {

      // arrange - example data
      const newSword = {...sword};

      // act
      const result = repair(newSword);

      //assert
      expect(result.durability).toBe(100);

    });
    
  });
});
