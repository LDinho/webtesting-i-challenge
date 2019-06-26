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

  describe('the fail fn', () => {

    it('should return new item', () => {
      const result = fail(shoe);
      expect(result).not.toBe(shoe);
    });

    it('should decrease durability by 5 if enhancement is < 15', () => {

      // creating new object to add new enhancement value to test
      const newItem = {...rock, enhancement: 14};

      // running fn to test the actual result
      const actual = fail(newItem);

      // showing what's expected with clear variable naming
      const expected = newItem.durability - 5;
      // assertion
      expect(actual.durability).toBe(expected);
    });

    it('should decrease durability by 10 if enhancement ≥ 15', () => {
      const newItem = {...sword, enhancement: 15};
      const actual = fail(newItem);

      const expected = newItem.durability - 10;
      expect(actual.durability).toBe(expected);
    });

    it('should decrease enhancement by 1 if enhancement > 16', () => {
      const newItem = {...sword, enhancement: 17}
      const actual = fail(newItem);

      const expected = newItem.enhancement - 1;
      expect(actual.enhancement).toBe(expected);
    });

    it('should not decrease if enhancement ≤ 16', () => {
      const newSword = {...sword, enhancement: 16};

      const actualSword = fail(newSword);
      const actualRock = fail(rock);

      expect(actualSword.enhancement).toBe(newSword.enhancement);
      expect(actualRock.enhancement).toBe(rock.enhancement);
    });
  });
});
