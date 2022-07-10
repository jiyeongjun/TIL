// @ts-check
/**
 * Initailizes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
/**
 *
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}

/**
 * Gets the first element of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @template T
 * @param {Array<T>} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
function head(array) {
  return array != null && array.length ? array[0] : undefined;
}

export default head;


