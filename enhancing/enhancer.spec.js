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

    it('should restore durability to 100', () => {

      // arrange - example data
      const newSword = {...sword};

      // act
      const result = repair(newSword);

      //assert
      expect(result.durability).toBe(100);

    });

  });

});
