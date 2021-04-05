/**
 * getParamValues
 * Retrieves the params from an URL.
 *
 * @param {string} url
 * @returns Object
 */
export const getParamValues = (url) => {
  return url
    .slice(1)
    .split("&")
    .reduce((prev, curr) => {
      const [title, value] = curr.split("=");
      prev[title] = value;
      return prev;
    }, {});
};
