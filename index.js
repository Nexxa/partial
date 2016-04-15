/**
 * @file Partial - Function partial application
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

const atoa = require('nexxa-atoa');

/**
 * Returns function with arguments partially applied.
 * @param  {Function} fn - The function
 * @return {Function} The function with arguments partially applied
 */
module.exports = function(fn) {
  const args = atoa(arguments, 1);

  return function() {
    return fn.apply(this, args.concat(atoa(arguments, 0)));
  };
};
