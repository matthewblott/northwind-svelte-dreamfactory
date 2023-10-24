import { _ as _isPlainObject, b as _get } from "./create-form.js";
function getValue(storeValue, selectorOrPath) {
  if (!_isPlainObject(storeValue) || !selectorOrPath)
    return storeValue;
  if (typeof selectorOrPath === "string") {
    return _get(storeValue, selectorOrPath);
  }
  return selectorOrPath(storeValue);
}
export {
  getValue as g
};
