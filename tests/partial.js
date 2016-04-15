/**
 * @file Partial - tests
 * @author StefanoMagrassi <stefano.magrassi@nexxa.it>
 */

const test = require('tape');
const partial = require('../index');

test('Function partial', t => {

  t.test('Some arguments partially applied', st => {
    const sum1     = partial(sum, 1);
    const actual   = sum1(2);
    const expected = sum(1, 2);

    st.equal(actual, expected, 'Function and partial should return same value');
    st.end();
  });

  t.test('No arguments partially applied', st => {
    const sumAll   = partial(sum);
    const actual   = sumAll(1, 2);
    const expected = sum(1, 2);

    st.equal(actual, expected, 'Function and partial should return same value');
    st.end();
  });

  t.test('Extra arguments partially applied', st => {
    const sumExtra = partial(sum, 1, 2, 3);
    const actual   = sumExtra();
    const expected = sum(1, 2);

    st.equal(actual, expected, 'Function and partial should return same value');
    st.end();
  });
});

/**
 * Gets the sum of two supplied numbers. Testing purpose.
 * @param  {number} x - First number
 * @param  {number} y - Second number
 * @return {number} Sum of the two numbers
 */
function sum(x, y) {
  return x + y;
}
