/** @module filenamify-shrink */

import filenamify from "filenamify"

/**
 * @function
 * @param {string} string
 * @returns {string} A file-safe string
 * @example
 * import filenamifyShrink from "filenamify-shrink"
 * const result = filenamifyShrink("a ?  ?b")
 * result === "a b"
 */
export default string => filenamify(string, {replacement: ""}).replace(/ +/g, " ")