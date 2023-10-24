import { w as writable } from "./index2.js";
import { r as onDestroy } from "./index3.js";
function subscribe(store, ...callbacks) {
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get(store) {
  let value = void 0;
  subscribe(store, (_) => value = _)();
  return value;
}
class FelteSubmitError extends Error {
  constructor(message, response) {
    super(message);
    this.name = "FelteSubmitError";
    this.response = response;
  }
}
function _some(obj, pred) {
  const keys = Object.keys(obj);
  return keys.some((key) => pred(obj[key]));
}
function _mapValues(obj, updater) {
  const keys = Object.keys(obj || {});
  return keys.reduce((acc, key) => Object.assign(Object.assign({}, acc), { [key]: updater(obj[key]) }), {});
}
function _isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function _cloneDeep(obj) {
  return Object.keys(obj || {}).reduce((res, key) => Object.assign(Object.assign({}, res), { [key]: _isPlainObject(obj[key]) ? _cloneDeep(obj[key]) : Array.isArray(obj[key]) ? [...obj[key]] : obj[key] }), {});
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest$2(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function handleArray(value) {
  return function(propVal) {
    if (_isPlainObject(propVal)) {
      const _a = deepSet(propVal, value), field = __rest$2(_a, ["key"]);
      return field;
    }
    return value;
  };
}
function deepSet(obj, value) {
  return _mapValues(obj, (prop) => _isPlainObject(prop) ? deepSet(prop, value) : Array.isArray(prop) ? prop.map(handleArray(value)) : value);
}
function _mergeWith(...args) {
  const customizer = args.pop();
  const _obj = args.shift();
  if (typeof _obj === "string")
    return _obj;
  const obj = _cloneDeep(_obj);
  if (args.length === 0)
    return obj;
  for (const source of args) {
    if (!source)
      continue;
    if (typeof source === "string")
      return source;
    let rsValue = customizer(obj, source);
    if (typeof rsValue !== "undefined")
      return rsValue;
    const keys = Array.from(new Set(Object.keys(obj).concat(Object.keys(source))));
    for (const key of keys) {
      rsValue = customizer(obj[key], source[key]);
      if (typeof rsValue !== "undefined") {
        obj[key] = rsValue;
      } else if (_isPlainObject(source[key]) && _isPlainObject(obj[key])) {
        obj[key] = _mergeWith(obj[key], source[key], customizer);
      } else if (Array.isArray(source[key])) {
        obj[key] = source[key].map((val, i) => {
          if (!_isPlainObject(val))
            return val;
          const newObj = Array.isArray(obj[key]) ? obj[key][i] : obj[key];
          return _mergeWith(newObj, val, customizer);
        });
      } else if (_isPlainObject(source[key])) {
        const defaultObj = deepSet(_cloneDeep(source[key]), void 0);
        obj[key] = _mergeWith(defaultObj, source[key], customizer);
      } else if (typeof source[key] !== "undefined") {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
function defaultsCustomizer(objValue, srcValue) {
  if (_isPlainObject(objValue) && _isPlainObject(srcValue))
    return;
  if (Array.isArray(srcValue)) {
    if (srcValue.some(_isPlainObject))
      return;
    const objArray = Array.isArray(objValue) ? objValue : [];
    return srcValue.map((value, index) => {
      var _a;
      return (_a = objArray[index]) !== null && _a !== void 0 ? _a : value;
    });
  }
  if (typeof objValue !== "undefined")
    return objValue;
}
function _defaultsDeep(...args) {
  return _mergeWith(...args, defaultsCustomizer);
}
function _merge(...args) {
  return _mergeWith(...args, () => void 0);
}
function _get(obj, path, defaultValue) {
  const travel = (regexp) => String.prototype.split.call(path, regexp).filter(Boolean).reduce((res, key) => res !== null && res !== void 0 ? res[key] : res, obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === void 0 || result === obj ? defaultValue : result;
}
function _update(obj, path, updater) {
  if (obj)
    obj = _cloneDeep(obj);
  if (!_isPlainObject(obj))
    obj = {};
  const splitPath = !Array.isArray(path) ? path.match(/[^.[\]]+/g) || [] : path;
  const lastSection = splitPath[splitPath.length - 1];
  if (!lastSection)
    return obj;
  let property = obj;
  for (let i = 0; i < splitPath.length - 1; i++) {
    const section = splitPath[i];
    if (!property[section] || !_isPlainObject(property[section]) && !Array.isArray(property[section])) {
      const nextSection = splitPath[i + 1];
      if (isNaN(Number(nextSection))) {
        property[section] = {};
      } else {
        property[section] = [];
      }
    }
    property = property[section];
  }
  property[lastSection] = updater(property[lastSection]);
  return obj;
}
function _set(obj, path, value) {
  return _update(obj, path, () => value);
}
function _unset(obj, path) {
  if (!obj || Object(obj) !== obj)
    return;
  else if (typeof obj !== "undefined")
    obj = _cloneDeep(obj);
  const newPath = !Array.isArray(path) ? path.toString().match(/[^.[\]]+/g) || [] : path;
  const foundProp = newPath.length === 1 ? obj : _get(obj, newPath.slice(0, -1).join("."));
  if (Array.isArray(foundProp)) {
    foundProp.splice(Number(newPath[newPath.length - 1]), 1);
  } else {
    foundProp === null || foundProp === void 0 ? true : delete foundProp[newPath[newPath.length - 1]];
  }
  return obj;
}
function deepSome(obj, pred) {
  return _some(obj, (value) => _isPlainObject(value) ? deepSome(value, pred) : Array.isArray(value) ? value.length === 0 || value.every((v) => typeof v === "string") ? pred(value) : value.some((v) => _isPlainObject(v) ? deepSome(v, pred) : pred(v)) : pred(value));
}
function isInputElement(el) {
  return (el === null || el === void 0 ? void 0 : el.nodeName) === "INPUT";
}
function isTextAreaElement(el) {
  return (el === null || el === void 0 ? void 0 : el.nodeName) === "TEXTAREA";
}
function isSelectElement(el) {
  return (el === null || el === void 0 ? void 0 : el.nodeName) === "SELECT";
}
function isFieldSetElement(el) {
  return (el === null || el === void 0 ? void 0 : el.nodeName) === "FIELDSET";
}
function isFormControl(el) {
  return isInputElement(el) || isTextAreaElement(el) || isSelectElement(el);
}
function isElement(el) {
  return el.nodeType === Node.ELEMENT_NODE;
}
function getPath(el, name) {
  return name !== null && name !== void 0 ? name : isFormControl(el) ? el.name : "";
}
function shouldIgnore(el) {
  let parent = el;
  while (parent && parent.nodeName !== "FORM") {
    if (parent.hasAttribute("data-felte-ignore"))
      return true;
    parent = parent.parentElement;
  }
  return false;
}
function executeCustomizer(objValue, srcValue) {
  if (_isPlainObject(objValue) || _isPlainObject(srcValue))
    return;
  if (objValue === null || objValue === "")
    return srcValue;
  if (srcValue === null || srcValue === "")
    return objValue;
  if (!srcValue)
    return objValue;
  if (!objValue || !srcValue)
    return;
  if (Array.isArray(objValue)) {
    if (!Array.isArray(srcValue))
      return [...objValue, srcValue];
    const newErrors = [];
    const errLength = Math.max(srcValue.length, objValue.length);
    for (let i = 0; i < errLength; i++) {
      let obj = objValue[i];
      let src = srcValue[i];
      if (!_isPlainObject(obj) && !_isPlainObject(src)) {
        if (!Array.isArray(obj))
          obj = [obj];
        if (!Array.isArray(src))
          src = [src];
        newErrors.push(...obj, ...src);
      } else {
        newErrors.push(mergeErrors([obj !== null && obj !== void 0 ? obj : {}, src !== null && src !== void 0 ? src : {}]));
      }
    }
    return newErrors.filter(Boolean);
  }
  if (!Array.isArray(srcValue))
    srcValue = [srcValue];
  return [objValue, ...srcValue].reduce((acc, value) => acc.concat(value), []).filter(Boolean);
}
function mergeErrors(errors) {
  const merged = _mergeWith(...errors, executeCustomizer);
  return merged;
}
function runValidations(values, validationOrValidations) {
  if (!validationOrValidations)
    return [];
  const validations = Array.isArray(validationOrValidations) ? validationOrValidations : [validationOrValidations];
  return validations.map((v) => v(values));
}
function executeTransforms(values, transforms) {
  if (!transforms)
    return values;
  if (!Array.isArray(transforms))
    return transforms(values);
  return transforms.reduce((res, t) => t(res), values);
}
function createId(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
function debounce(func, timeout, { onInit, onEnd } = {}) {
  let timer;
  return (...args) => {
    if (!timer)
      onInit === null || onInit === void 0 ? void 0 : onInit();
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = void 0;
      onEnd === null || onEnd === void 0 ? void 0 : onEnd();
    }, timeout);
  };
}
function getFormControls(el) {
  if (isFormControl(el))
    return [el];
  if (el.childElementCount === 0)
    return [];
  const foundControls = /* @__PURE__ */ new Set();
  for (const child of el.children) {
    if (isFormControl(child))
      foundControls.add(child);
    if (isFieldSetElement(child)) {
      for (const fieldsetChild of child.elements) {
        if (isFormControl(fieldsetChild))
          foundControls.add(fieldsetChild);
      }
    }
    if (child.childElementCount > 0)
      getFormControls(child).forEach((value) => foundControls.add(value));
  }
  return Array.from(foundControls);
}
function addAttrsFromFieldset(fieldSet) {
  for (const element of fieldSet.elements) {
    if (!isFormControl(element) && !isFieldSetElement(element))
      continue;
    if (fieldSet.hasAttribute("data-felte-keep-on-remove") && !element.hasAttribute("data-felte-keep-on-remove")) {
      element.dataset.felteKeepOnRemove = fieldSet.dataset.felteKeepOnRemove;
    }
  }
}
function getInputTextOrNumber(el) {
  if (el.type.match(/^(number|range)$/)) {
    return !el.value ? void 0 : +el.value;
  } else {
    return el.value;
  }
}
function getFormDefaultValues(node) {
  var _a;
  let defaultData = {};
  let defaultTouched = {};
  for (const el of node.elements) {
    if (isFieldSetElement(el))
      addAttrsFromFieldset(el);
    if (!isFormControl(el) || !el.name)
      continue;
    const elName = getPath(el);
    if (isInputElement(el)) {
      if (el.type === "checkbox") {
        if (typeof _get(defaultData, elName) === "undefined") {
          const checkboxes = Array.from(node.querySelectorAll(`[name="${el.name}"]`)).filter((checkbox) => {
            if (!isFormControl(checkbox))
              return false;
            return elName === getPath(checkbox);
          });
          if (checkboxes.length === 1) {
            defaultData = _set(defaultData, elName, el.checked);
            defaultTouched = _set(defaultTouched, elName, false);
            continue;
          }
          defaultData = _set(defaultData, elName, el.checked ? [el.value] : []);
          defaultTouched = _set(defaultTouched, elName, false);
          continue;
        }
        if (Array.isArray(_get(defaultData, elName)) && el.checked) {
          defaultData = _update(defaultData, elName, (value) => [
            ...value,
            el.value
          ]);
        }
        continue;
      }
      if (el.type === "radio") {
        if (_get(defaultData, elName))
          continue;
        defaultData = _set(defaultData, elName, el.checked ? el.value : void 0);
        defaultTouched = _set(defaultTouched, elName, false);
        continue;
      }
      if (el.type === "file") {
        defaultData = _set(defaultData, elName, el.multiple ? Array.from(el.files || []) : (_a = el.files) === null || _a === void 0 ? void 0 : _a[0]);
        defaultTouched = _set(defaultTouched, elName, false);
        continue;
      }
    } else if (isSelectElement(el)) {
      const multiple = el.multiple;
      if (!multiple) {
        defaultData = _set(defaultData, elName, el.value);
      } else {
        const selectedOptions = Array.from(el.options).filter((opt) => opt.selected).map((opt) => opt.value);
        defaultData = _set(defaultData, elName, selectedOptions);
      }
      defaultTouched = _set(defaultTouched, elName, false);
      continue;
    }
    const inputValue = getInputTextOrNumber(el);
    defaultData = _set(defaultData, elName, inputValue);
    defaultTouched = _set(defaultTouched, elName, false);
  }
  return { defaultData, defaultTouched };
}
function setControlValue(el, value) {
  var _a;
  if (!isFormControl(el))
    return;
  const fieldValue = value;
  if (isInputElement(el)) {
    if (el.type === "checkbox") {
      const checkboxesDefaultData = fieldValue;
      if (typeof checkboxesDefaultData === "undefined" || typeof checkboxesDefaultData === "boolean") {
        el.checked = !!checkboxesDefaultData;
        return;
      }
      if (Array.isArray(checkboxesDefaultData)) {
        if (checkboxesDefaultData.includes(el.value)) {
          el.checked = true;
        } else {
          el.checked = false;
        }
      }
      return;
    }
    if (el.type === "radio") {
      const radioValue = fieldValue;
      if (el.value === radioValue)
        el.checked = true;
      else
        el.checked = false;
      return;
    }
    if (el.type === "file") {
      el.files = null;
      el.value = "";
      return;
    }
  } else if (isSelectElement(el)) {
    const multiple = el.multiple;
    if (!multiple) {
      el.value = String(fieldValue !== null && fieldValue !== void 0 ? fieldValue : "");
      for (const option of el.options) {
        if (option.value === String(fieldValue)) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
    } else if (Array.isArray(fieldValue)) {
      el.value = String((_a = fieldValue[0]) !== null && _a !== void 0 ? _a : "");
      const stringValues = fieldValue.map((v) => String(v));
      for (const option of el.options) {
        if (stringValues.includes(option.value)) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
    }
    return;
  }
  el.value = String(fieldValue !== null && fieldValue !== void 0 ? fieldValue : "");
}
function setForm(node, data) {
  for (const el of node.elements) {
    if (isFieldSetElement(el))
      addAttrsFromFieldset(el);
    if (!isFormControl(el) || !el.name)
      continue;
    const elName = getPath(el);
    setControlValue(el, _get(data, elName));
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest$1(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function deepSetTouched(obj, value) {
  return _mapValues(obj, (prop) => {
    if (_isPlainObject(prop))
      return deepSetTouched(prop, value);
    if (Array.isArray(prop)) {
      if (prop.length === 0 || prop.every((p) => typeof p === "string"))
        return value;
      return prop.map((p) => {
        const _a = deepSetTouched(p, value), field = __rest$1(_a, ["key"]);
        return field;
      });
    }
    return value;
  });
}
function deepSetKey(obj) {
  if (!obj)
    return {};
  return _mapValues(obj, (prop) => {
    if (_isPlainObject(prop))
      return deepSetKey(prop);
    if (Array.isArray(prop)) {
      if (prop.length === 0 || prop.every((p) => typeof p === "string"))
        return prop;
      return prop.map((p) => {
        if (!_isPlainObject(p))
          return p;
        const field = deepSetKey(p);
        if (!field.key)
          field.key = createId();
        return field;
      });
    }
    return prop;
  });
}
function deepRemoveKey(obj) {
  if (!obj)
    return {};
  return _mapValues(obj, (prop) => {
    if (_isPlainObject(prop))
      return deepSetKey(prop);
    if (Array.isArray(prop)) {
      if (prop.length === 0 || prop.every((p) => typeof p === "string"))
        return prop;
      return prop.map((p) => {
        if (!_isPlainObject(p))
          return p;
        const _a = deepSetKey(p), field = __rest$1(_a, ["key"]);
        return field;
      });
    }
    return prop;
  });
}
function createEventConstructors() {
  class SuccessEvent extends CustomEvent {
    constructor(detail) {
      super("feltesuccess", { detail });
    }
  }
  class ErrorEvent extends CustomEvent {
    constructor(detail) {
      super("felteerror", { detail, cancelable: true });
    }
    setErrors(errors) {
      this.preventDefault();
      this.errors = errors;
    }
  }
  class SubmitEvent extends Event {
    constructor() {
      super("feltesubmit", { cancelable: true });
    }
    handleSubmit(onSubmit) {
      this.onSubmit = onSubmit;
    }
    handleError(onError) {
      this.onError = onError;
    }
    handleSuccess(onSuccess) {
      this.onSuccess = onSuccess;
    }
  }
  return {
    createErrorEvent: (detail) => new ErrorEvent(detail),
    createSubmitEvent: () => new SubmitEvent(),
    createSuccessEvent: (detail) => new SuccessEvent(detail)
  };
}
function createDefaultSubmitHandler(form) {
  if (!form)
    return;
  return async function onSubmit() {
    let body = new FormData(form);
    const action = new URL(form.action);
    const method = form.method.toLowerCase() === "get" ? "get" : action.searchParams.get("_method") || form.method;
    let enctype = form.enctype;
    if (form.querySelector('input[type="file"]')) {
      enctype = "multipart/form-data";
    }
    if (method === "get" || enctype === "application/x-www-form-urlencoded") {
      body = new URLSearchParams(body);
    }
    let fetchOptions;
    if (method === "get") {
      body.forEach((value, key) => {
        action.searchParams.append(key, value);
      });
      fetchOptions = { method, headers: { Accept: "application/json" } };
    } else {
      fetchOptions = {
        method,
        body,
        headers: Object.assign(Object.assign({}, enctype !== "multipart/form-data" && {
          "Content-Type": enctype
        }), { Accept: "application/json" })
      };
    }
    const response = await window.fetch(action.toString(), fetchOptions);
    if (response.ok)
      return response;
    throw new FelteSubmitError("An error occurred while submitting the form", response);
  };
}
function addAtIndex(storeValue, path, value, index) {
  return _update(storeValue, path, (oldValue) => {
    if (typeof oldValue !== "undefined" && !Array.isArray(oldValue))
      return oldValue;
    if (!oldValue)
      oldValue = [];
    if (typeof index === "undefined") {
      oldValue.push(value);
    } else {
      oldValue.splice(index, 0, value);
    }
    return oldValue;
  });
}
function swapInArray(storeValue, path, from, to) {
  return _update(storeValue, path, (oldValue) => {
    if (!oldValue || !Array.isArray(oldValue))
      return oldValue;
    [oldValue[from], oldValue[to]] = [oldValue[to], oldValue[from]];
    return oldValue;
  });
}
function moveInArray(storeValue, path, from, to) {
  return _update(storeValue, path, (oldValue) => {
    if (!oldValue || !Array.isArray(oldValue))
      return oldValue;
    oldValue.splice(to, 0, oldValue.splice(from, 1)[0]);
    return oldValue;
  });
}
function isUpdater(value) {
  return typeof value === "function";
}
function createSetHelper(storeSetter) {
  const setHelper = (pathOrValue, valueOrUpdater) => {
    if (typeof pathOrValue === "string") {
      const path = pathOrValue;
      storeSetter((oldValue) => {
        const newValue = isUpdater(valueOrUpdater) ? valueOrUpdater(_get(oldValue, path)) : valueOrUpdater;
        return _set(oldValue, path, newValue);
      });
    } else {
      storeSetter((oldValue) => isUpdater(pathOrValue) ? pathOrValue(oldValue) : pathOrValue);
    }
  };
  return setHelper;
}
function createHelpers({ stores, config, validateErrors, validateWarnings, _getCurrentExtenders }) {
  var _a;
  let formNode;
  let initialValues = deepSetKey((_a = config.initialValues) !== null && _a !== void 0 ? _a : {});
  const { data, touched, errors, warnings, isDirty, isSubmitting, interacted } = stores;
  const setData = createSetHelper(data.update);
  const setTouched = createSetHelper(touched.update);
  const setErrors = createSetHelper(errors.update);
  const setWarnings = createSetHelper(warnings.update);
  function updateFields(updater) {
    setData((oldData) => {
      const newData = updater(oldData);
      if (formNode)
        setForm(formNode, newData);
      return newData;
    });
  }
  const setFields = (pathOrValue, valueOrUpdater, shouldTouch) => {
    const fieldsSetter = createSetHelper(updateFields);
    fieldsSetter(pathOrValue, valueOrUpdater);
    if (typeof pathOrValue === "string" && shouldTouch) {
      setTouched(pathOrValue, true);
    }
  };
  function addField(path, value, index) {
    const touchedValue = _isPlainObject(value) ? deepSetTouched(value, false) : false;
    const errValue = _isPlainObject(touchedValue) ? deepSet(touchedValue, []) : [];
    value = _isPlainObject(value) ? Object.assign(Object.assign({}, value), { key: createId() }) : value;
    errors.update(($errors) => {
      return addAtIndex($errors, path, errValue, index);
    });
    warnings.update(($warnings) => {
      return addAtIndex($warnings, path, errValue, index);
    });
    touched.update(($touched) => {
      return addAtIndex($touched, path, touchedValue, index);
    });
    data.update(($data) => {
      const newData = addAtIndex($data, path, value, index);
      setTimeout(() => formNode && setForm(formNode, newData));
      return newData;
    });
  }
  function updateAll(updater) {
    errors.update(updater);
    warnings.update(updater);
    touched.update(updater);
    data.update(($data) => {
      const newData = updater($data);
      setTimeout(() => formNode && setForm(formNode, newData));
      return newData;
    });
  }
  function unsetField(path) {
    updateAll((storeValue) => _unset(storeValue, path));
  }
  function swapFields(path, from, to) {
    updateAll((storeValue) => swapInArray(storeValue, path, from, to));
  }
  function moveField(path, from, to) {
    updateAll((storeValue) => moveInArray(storeValue, path, from, to));
  }
  function resetField(path) {
    const initialValue = _get(initialValues, path);
    const touchedValue = _isPlainObject(initialValue) ? deepSetTouched(initialValue, false) : false;
    const errValue = _isPlainObject(touchedValue) ? deepSet(touchedValue, []) : [];
    data.update(($data) => {
      const newData = _set($data, path, initialValue);
      if (formNode)
        setForm(formNode, newData);
      return newData;
    });
    touched.update(($touched) => {
      return _set($touched, path, touchedValue);
    });
    errors.update(($errors) => {
      return _set($errors, path, errValue);
    });
    warnings.update(($warnings) => {
      return _set($warnings, path, errValue);
    });
  }
  const setIsSubmitting = createSetHelper(isSubmitting.update);
  const setIsDirty = createSetHelper(isDirty.update);
  const setInteracted = createSetHelper(interacted.update);
  async function validate() {
    const currentData = get(data);
    touched.set(deepSetTouched(currentData, true));
    interacted.set(null);
    const currentErrors = await validateErrors(currentData);
    await validateWarnings(currentData);
    return currentErrors;
  }
  function reset() {
    setFields(_cloneDeep(initialValues));
    setTouched(($touched) => deepSet($touched, false));
    interacted.set(null);
    isDirty.set(false);
  }
  function createSubmitHandler(altConfig) {
    return async function handleSubmit(event) {
      var _a2, _b, _c, _d, _e, _f, _g;
      const { createErrorEvent, createSubmitEvent, createSuccessEvent } = createEventConstructors();
      const submitEvent = createSubmitEvent();
      formNode === null || formNode === void 0 ? void 0 : formNode.dispatchEvent(submitEvent);
      const onError = (_b = (_a2 = submitEvent.onError) !== null && _a2 !== void 0 ? _a2 : altConfig === null || altConfig === void 0 ? void 0 : altConfig.onError) !== null && _b !== void 0 ? _b : config.onError;
      const onSuccess = (_d = (_c = submitEvent.onSuccess) !== null && _c !== void 0 ? _c : altConfig === null || altConfig === void 0 ? void 0 : altConfig.onSuccess) !== null && _d !== void 0 ? _d : config.onSuccess;
      const onSubmit = (_g = (_f = (_e = submitEvent.onSubmit) !== null && _e !== void 0 ? _e : altConfig === null || altConfig === void 0 ? void 0 : altConfig.onSubmit) !== null && _f !== void 0 ? _f : config.onSubmit) !== null && _g !== void 0 ? _g : createDefaultSubmitHandler(formNode);
      if (!onSubmit)
        return;
      event === null || event === void 0 ? void 0 : event.preventDefault();
      if (submitEvent.defaultPrevented)
        return;
      isSubmitting.set(true);
      interacted.set(null);
      const currentData = deepRemoveKey(get(data));
      const currentErrors = await validateErrors(currentData, altConfig === null || altConfig === void 0 ? void 0 : altConfig.validate);
      const currentWarnings = await validateWarnings(currentData, altConfig === null || altConfig === void 0 ? void 0 : altConfig.warn);
      if (currentWarnings)
        warnings.set(_merge(deepSet(currentData, []), currentWarnings));
      touched.set(deepSetTouched(currentData, true));
      if (currentErrors) {
        touched.set(deepSetTouched(currentErrors, true));
        const hasErrors = deepSome(currentErrors, (error) => Array.isArray(error) ? error.length >= 1 : !!error);
        if (hasErrors) {
          await new Promise((r) => setTimeout(r));
          _getCurrentExtenders().forEach((extender) => {
            var _a3;
            return (_a3 = extender.onSubmitError) === null || _a3 === void 0 ? void 0 : _a3.call(extender, {
              data: currentData,
              errors: currentErrors
            });
          });
          isSubmitting.set(false);
          return;
        }
      }
      const context = {
        setFields,
        setData,
        setTouched,
        setErrors,
        setWarnings,
        unsetField,
        addField,
        resetField,
        reset,
        setInitialValues: publicHelpers.setInitialValues,
        moveField,
        swapFields,
        form: formNode,
        controls: formNode && Array.from(formNode.elements).filter(isFormControl),
        config: Object.assign(Object.assign({}, config), altConfig)
      };
      try {
        const response = await onSubmit(currentData, context);
        formNode === null || formNode === void 0 ? void 0 : formNode.dispatchEvent(createSuccessEvent(Object.assign({ response }, context)));
        await (onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(response, context));
      } catch (e) {
        const errorEvent = createErrorEvent(Object.assign({ error: e }, context));
        formNode === null || formNode === void 0 ? void 0 : formNode.dispatchEvent(errorEvent);
        if (!onError && !errorEvent.defaultPrevented) {
          throw e;
        }
        if (!onError && !errorEvent.errors)
          return;
        const serverErrors = errorEvent.errors || await (onError === null || onError === void 0 ? void 0 : onError(e, context));
        if (serverErrors) {
          touched.set(deepSetTouched(serverErrors, true));
          errors.set(serverErrors);
          await new Promise((r) => setTimeout(r));
          _getCurrentExtenders().forEach((extender) => {
            var _a3;
            return (_a3 = extender.onSubmitError) === null || _a3 === void 0 ? void 0 : _a3.call(extender, {
              data: currentData,
              errors: get(errors)
            });
          });
        }
      } finally {
        isSubmitting.set(false);
      }
    };
  }
  const publicHelpers = {
    setData,
    setFields,
    setTouched,
    setErrors,
    setWarnings,
    setIsSubmitting,
    setIsDirty,
    setInteracted,
    validate,
    reset,
    unsetField,
    resetField,
    addField,
    swapFields,
    moveField,
    createSubmitHandler,
    handleSubmit: createSubmitHandler(),
    setInitialValues: (values) => {
      initialValues = deepSetKey(values);
    }
  };
  const privateHelpers = {
    _setFormNode(node) {
      formNode = node;
    },
    _getInitialValues: () => initialValues
  };
  return {
    public: publicHelpers,
    private: privateHelpers
  };
}
function createFormAction({ helpers, stores, config, extender, createSubmitHandler, handleSubmit, _setFormNode, _getInitialValues, _setCurrentExtenders, _getCurrentExtenders }) {
  const { setFields, setTouched, reset, setInitialValues } = helpers;
  const { addValidator, addTransformer, validate } = helpers;
  const { data, errors, warnings, touched, isSubmitting, isDirty, interacted, isValid, isValidating } = stores;
  function form(node) {
    if (!node.requestSubmit)
      node.requestSubmit = handleSubmit;
    function callExtender(stage) {
      return function(extender2) {
        return extender2({
          form: node,
          stage,
          controls: Array.from(node.elements).filter(isFormControl),
          data,
          errors,
          warnings,
          touched,
          isValid,
          isValidating,
          isSubmitting,
          isDirty,
          interacted,
          config,
          addValidator,
          addTransformer,
          setFields,
          validate,
          reset,
          createSubmitHandler,
          handleSubmit
        });
      };
    }
    _setCurrentExtenders(extender.map(callExtender("MOUNT")));
    node.noValidate = !!config.validate;
    const { defaultData, defaultTouched } = getFormDefaultValues(node);
    _setFormNode(node);
    setInitialValues(_merge(_cloneDeep(defaultData), _getInitialValues()));
    setFields(_getInitialValues());
    touched.set(defaultTouched);
    function setCheckboxValues(target) {
      const elPath = getPath(target);
      const checkboxes = Array.from(node.querySelectorAll(`[name="${target.name}"]`)).filter((checkbox) => {
        if (!isFormControl(checkbox))
          return false;
        return elPath === getPath(checkbox);
      });
      if (checkboxes.length === 0)
        return;
      if (checkboxes.length === 1) {
        return data.update(($data) => _set($data, getPath(target), target.checked));
      }
      return data.update(($data) => {
        return _set($data, getPath(target), checkboxes.filter(isInputElement).filter((el) => el.checked).map((el) => el.value));
      });
    }
    function setRadioValues(target) {
      const radios = node.querySelectorAll(`[name="${target.name}"]`);
      const checkedRadio = Array.from(radios).find((el) => isInputElement(el) && el.checked);
      data.update(($data) => _set($data, getPath(target), checkedRadio === null || checkedRadio === void 0 ? void 0 : checkedRadio.value));
    }
    function setFileValue(target) {
      var _a;
      const files = Array.from((_a = target.files) !== null && _a !== void 0 ? _a : []);
      data.update(($data) => {
        return _set($data, getPath(target), target.multiple ? files : files[0]);
      });
    }
    function setSelectValue(target) {
      if (!target.multiple) {
        data.update(($data) => {
          return _set($data, getPath(target), target.value);
        });
      } else {
        const selectedOptions = Array.from(target.options).filter((opt) => opt.selected).map((opt) => opt.value);
        data.update(($data) => {
          return _set($data, getPath(target), selectedOptions);
        });
      }
    }
    function handleInput(e) {
      const target = e.target;
      if (!target || !isFormControl(target) || isSelectElement(target) || shouldIgnore(target))
        return;
      if (["checkbox", "radio", "file"].includes(target.type))
        return;
      if (!target.name)
        return;
      isDirty.set(true);
      const inputValue = getInputTextOrNumber(target);
      interacted.set(target.name);
      data.update(($data) => {
        return _set($data, getPath(target), inputValue);
      });
    }
    function handleChange(e) {
      const target = e.target;
      if (!target || !isFormControl(target) || shouldIgnore(target))
        return;
      if (!target.name)
        return;
      setTouched(getPath(target), true);
      interacted.set(target.name);
      if (isSelectElement(target) || ["checkbox", "radio", "file", "hidden"].includes(target.type)) {
        isDirty.set(true);
      }
      if (target.type === "hidden") {
        data.update(($data) => {
          return _set($data, getPath(target), target.value);
        });
      }
      if (isSelectElement(target))
        setSelectValue(target);
      else if (!isInputElement(target))
        return;
      else if (target.type === "checkbox")
        setCheckboxValues(target);
      else if (target.type === "radio")
        setRadioValues(target);
      else if (target.type === "file")
        setFileValue(target);
    }
    function handleBlur(e) {
      const target = e.target;
      if (!target || !isFormControl(target) || shouldIgnore(target))
        return;
      if (!target.name)
        return;
      setTouched(getPath(target), true);
      interacted.set(target.name);
    }
    function handleReset(e) {
      e.preventDefault();
      reset();
    }
    const mutationOptions = { childList: true, subtree: true };
    function unsetTaggedForRemove(formControls) {
      let currentData = get(data);
      let currentTouched = get(touched);
      let currentErrors = get(errors);
      let currentWarnings = get(warnings);
      for (const control of formControls.reverse()) {
        if (control.hasAttribute("data-felte-keep-on-remove") && control.dataset.felteKeepOnRemove !== "false")
          continue;
        const fieldArrayReg = /.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;
        let fieldName = getPath(control);
        const shape = get(touched);
        const isFieldArray = fieldArrayReg.test(fieldName);
        if (isFieldArray) {
          const arrayPath = fieldName.split(".").slice(0, -1).join(".");
          const valueToRemove = _get(shape, arrayPath);
          if (_isPlainObject(valueToRemove) && Object.keys(valueToRemove).length <= 1) {
            fieldName = arrayPath;
          }
        }
        currentData = _unset(currentData, fieldName);
        currentTouched = _unset(currentTouched, fieldName);
        currentErrors = _unset(currentErrors, fieldName);
        currentWarnings = _unset(currentWarnings, fieldName);
      }
      data.set(currentData);
      touched.set(currentTouched);
      errors.set(currentErrors);
      warnings.set(currentWarnings);
    }
    const updateAddedNodes = debounce(() => {
      _getCurrentExtenders().forEach((extender2) => {
        var _a;
        return (_a = extender2.destroy) === null || _a === void 0 ? void 0 : _a.call(extender2);
      });
      _setCurrentExtenders(extender.map(callExtender("UPDATE")));
      const { defaultData: newDefaultData, defaultTouched: newDefaultTouched } = getFormDefaultValues(node);
      data.update(($data) => _defaultsDeep($data, newDefaultData));
      touched.update(($touched) => {
        return _defaultsDeep($touched, newDefaultTouched);
      });
      helpers.setFields(get(data));
    }, 0);
    let removedFormControls = [];
    const updateRemovedNodes = debounce(() => {
      _getCurrentExtenders().forEach((extender2) => {
        var _a;
        return (_a = extender2.destroy) === null || _a === void 0 ? void 0 : _a.call(extender2);
      });
      _setCurrentExtenders(extender.map(callExtender("UPDATE")));
      unsetTaggedForRemove(removedFormControls);
      removedFormControls = [];
    }, 0);
    function handleNodeAddition(mutation) {
      const shouldUpdate = Array.from(mutation.addedNodes).some((node2) => {
        if (!isElement(node2))
          return false;
        if (isFormControl(node2))
          return true;
        const formControls = getFormControls(node2);
        return formControls.length > 0;
      });
      if (!shouldUpdate)
        return;
      updateAddedNodes();
    }
    function handleNodeRemoval(mutation) {
      for (const removedNode of mutation.removedNodes) {
        if (!isElement(removedNode))
          continue;
        const formControls = getFormControls(removedNode);
        if (formControls.length === 0)
          continue;
        removedFormControls.push(...formControls);
        updateRemovedNodes();
      }
    }
    function mutationCallback(mutationList) {
      for (const mutation of mutationList) {
        if (mutation.type !== "childList")
          continue;
        if (mutation.addedNodes.length > 0)
          handleNodeAddition(mutation);
        if (mutation.removedNodes.length > 0)
          handleNodeRemoval(mutation);
      }
    }
    const observer = new MutationObserver(mutationCallback);
    observer.observe(node, mutationOptions);
    node.addEventListener("input", handleInput);
    node.addEventListener("change", handleChange);
    node.addEventListener("focusout", handleBlur);
    node.addEventListener("submit", handleSubmit);
    node.addEventListener("reset", handleReset);
    const unsubscribeErrors = errors.subscribe(($errors) => {
      for (const el of node.elements) {
        if (!isFormControl(el) || !el.name)
          continue;
        const fieldErrors = _get($errors, getPath(el));
        const message = Array.isArray(fieldErrors) ? fieldErrors.join("\n") : typeof fieldErrors === "string" ? fieldErrors : void 0;
        if (message === el.dataset.felteValidationMessage)
          continue;
        if (message) {
          el.dataset.felteValidationMessage = message;
          el.setAttribute("aria-invalid", "true");
        } else {
          delete el.dataset.felteValidationMessage;
          el.removeAttribute("aria-invalid");
        }
      }
    });
    return {
      destroy() {
        observer.disconnect();
        node.removeEventListener("input", handleInput);
        node.removeEventListener("change", handleChange);
        node.removeEventListener("focusout", handleBlur);
        node.removeEventListener("submit", handleSubmit);
        node.removeEventListener("reset", handleReset);
        unsubscribeErrors();
        _getCurrentExtenders().forEach((extender2) => {
          var _a;
          return (_a = extender2.destroy) === null || _a === void 0 ? void 0 : _a.call(extender2);
        });
      }
    };
  }
  return { form };
}
function createValidationController(priority) {
  const signal = { aborted: false, priority };
  return {
    signal,
    abort() {
      signal.aborted = true;
    }
  };
}
function errorFilterer(touchValue, errValue) {
  if (_isPlainObject(touchValue)) {
    if (!errValue || _isPlainObject(errValue) && Object.keys(errValue).length === 0) {
      return deepSet(touchValue, null);
    }
    return;
  }
  if (Array.isArray(touchValue)) {
    if (touchValue.some(_isPlainObject))
      return;
    const errArray = Array.isArray(errValue) ? errValue : [];
    return touchValue.map((value, index) => {
      const err = errArray[index];
      if (Array.isArray(err) && err.length === 0)
        return null;
      return value && err || null;
    });
  }
  if (Array.isArray(errValue) && errValue.length === 0)
    return null;
  if (Array.isArray(errValue))
    return touchValue ? errValue : null;
  return touchValue && errValue ? [errValue] : null;
}
function warningFilterer(touchValue, errValue) {
  if (_isPlainObject(touchValue)) {
    if (!errValue || _isPlainObject(errValue) && Object.keys(errValue).length === 0) {
      return deepSet(touchValue, null);
    }
    return;
  }
  if (Array.isArray(touchValue)) {
    if (touchValue.some(_isPlainObject))
      return;
    const errArray = Array.isArray(errValue) ? errValue : [];
    return touchValue.map((_, index) => {
      const err = errArray[index];
      if (Array.isArray(err) && err.length === 0)
        return null;
      return err || null;
    });
  }
  if (Array.isArray(errValue) && errValue.length === 0)
    return null;
  if (Array.isArray(errValue))
    return errValue;
  return errValue ? [errValue] : null;
}
function filterErrors([errors, touched]) {
  return _mergeWith(touched, errors, errorFilterer);
}
function filterWarnings([errors, touched]) {
  return _mergeWith(touched, errors, warningFilterer);
}
function createDerivedFactory(storeFactory) {
  return function derived(storeOrStores, deriver, initialValue) {
    const stores = Array.isArray(storeOrStores) ? storeOrStores : [storeOrStores];
    const values = new Array(stores.length);
    const derivedStore = storeFactory(initialValue);
    const storeSet = derivedStore.set;
    const storeSubscribe = derivedStore.subscribe;
    let unsubscribers;
    function startStore() {
      unsubscribers = stores.map((store, index) => {
        return store.subscribe(($store) => {
          values[index] = $store;
          storeSet(deriver(values));
        });
      });
    }
    function stopStore() {
      unsubscribers === null || unsubscribers === void 0 ? void 0 : unsubscribers.forEach((unsub) => unsub());
    }
    derivedStore.subscribe = function subscribe2(subscriber) {
      const unsubscribe = storeSubscribe(subscriber);
      return () => {
        unsubscribe();
      };
    };
    return [derivedStore, startStore, stopStore];
  };
}
function createStores(storeFactory, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const derived = createDerivedFactory(storeFactory);
  const initialValues = config.initialValues = config.initialValues ? deepSetKey(executeTransforms(_cloneDeep(config.initialValues), config.transform)) : {};
  const initialTouched = deepSetTouched(deepRemoveKey(initialValues), false);
  const touched = storeFactory(initialTouched);
  const validationCount = storeFactory(0);
  const [isValidating, startIsValidating, stopIsValidating] = derived([touched, validationCount], ([$touched, $validationCount]) => {
    const isTouched = deepSome($touched, (t) => !!t);
    return isTouched && $validationCount >= 1;
  }, false);
  delete isValidating.set;
  delete isValidating.update;
  function cancellableValidation(store) {
    let activeController;
    return async function executeValidations($data, shape, validations, priority = false) {
      if (!validations || !$data)
        return;
      let current = shape && Object.keys(shape).length > 0 ? shape : deepSet($data, []);
      const controller = createValidationController(priority);
      if (!(activeController === null || activeController === void 0 ? void 0 : activeController.signal.priority) || priority) {
        activeController === null || activeController === void 0 ? void 0 : activeController.abort();
        activeController = controller;
      }
      if (activeController.signal.priority && !priority)
        return;
      validationCount.update((c) => c + 1);
      const results = runValidations($data, validations);
      results.forEach(async (promise) => {
        const result = await promise;
        if (controller.signal.aborted)
          return;
        current = mergeErrors([current, result]);
        store.set(current);
      });
      await Promise.all(results);
      activeController = void 0;
      validationCount.update((c) => c - 1);
      return current;
    };
  }
  let storesShape = deepSet(initialTouched, []);
  const data = storeFactory(initialValues);
  const initialErrors = deepSet(initialTouched, []);
  const immediateErrors = storeFactory(initialErrors);
  const debouncedErrors = storeFactory(_cloneDeep(initialErrors));
  const [errors, startErrors, stopErrors] = derived([
    immediateErrors,
    debouncedErrors
  ], mergeErrors, _cloneDeep(initialErrors));
  const initialWarnings = deepSet(initialTouched, []);
  const immediateWarnings = storeFactory(initialWarnings);
  const debouncedWarnings = storeFactory(_cloneDeep(initialWarnings));
  const [warnings, startWarnings, stopWarnings] = derived([
    immediateWarnings,
    debouncedWarnings
  ], mergeErrors, _cloneDeep(initialWarnings));
  const [filteredErrors, startFilteredErrors, stopFilteredErrors] = derived([errors, touched], filterErrors, _cloneDeep(initialErrors));
  const [filteredWarnings, startFilteredWarnings, stopFilteredWarnings] = derived([warnings, touched], filterWarnings, _cloneDeep(initialWarnings));
  let firstCalled = false;
  const [isValid, startIsValid, stopIsValid] = derived(errors, ([$errors]) => {
    var _a2;
    if (!firstCalled) {
      firstCalled = true;
      return !config.validate && !((_a2 = config.debounced) === null || _a2 === void 0 ? void 0 : _a2.validate);
    } else {
      return !deepSome($errors, (error) => Array.isArray(error) ? error.length >= 1 : !!error);
    }
  }, !config.validate && !((_a = config.debounced) === null || _a === void 0 ? void 0 : _a.validate));
  delete isValid.set;
  delete isValid.update;
  const isSubmitting = storeFactory(false);
  const isDirty = storeFactory(false);
  const interacted = storeFactory(null);
  const validateErrors = cancellableValidation(immediateErrors);
  const validateWarnings = cancellableValidation(immediateWarnings);
  const validateDebouncedErrors = cancellableValidation(debouncedErrors);
  const validateDebouncedWarnings = cancellableValidation(debouncedWarnings);
  const _validateDebouncedErrors = debounce(validateDebouncedErrors, (_e = (_c = (_b = config.debounced) === null || _b === void 0 ? void 0 : _b.validateTimeout) !== null && _c !== void 0 ? _c : (_d = config.debounced) === null || _d === void 0 ? void 0 : _d.timeout) !== null && _e !== void 0 ? _e : 300, {
    onInit: () => {
      validationCount.update((c) => c + 1);
    },
    onEnd: () => {
      validationCount.update((c) => c - 1);
    }
  });
  const _validateDebouncedWarnings = debounce(validateDebouncedWarnings, (_j = (_g = (_f = config.debounced) === null || _f === void 0 ? void 0 : _f.warnTimeout) !== null && _g !== void 0 ? _g : (_h = config.debounced) === null || _h === void 0 ? void 0 : _h.timeout) !== null && _j !== void 0 ? _j : 300);
  async function executeErrorsValidation(data2, altValidate) {
    var _a2;
    const $data = deepRemoveKey(data2);
    const errors2 = validateErrors($data, storesShape, altValidate !== null && altValidate !== void 0 ? altValidate : config.validate, true);
    if (altValidate)
      return errors2;
    const debouncedErrors2 = validateDebouncedErrors($data, storesShape, (_a2 = config.debounced) === null || _a2 === void 0 ? void 0 : _a2.validate, true);
    return mergeErrors(await Promise.all([errors2, debouncedErrors2]));
  }
  async function executeWarningsValidation(data2, altWarn) {
    var _a2;
    const $data = deepRemoveKey(data2);
    const warnings2 = validateWarnings($data, storesShape, altWarn !== null && altWarn !== void 0 ? altWarn : config.warn, true);
    if (altWarn)
      return warnings2;
    const debouncedWarnings2 = validateDebouncedWarnings($data, storesShape, (_a2 = config.debounced) === null || _a2 === void 0 ? void 0 : _a2.warn, true);
    return mergeErrors(await Promise.all([warnings2, debouncedWarnings2]));
  }
  let errorsValue = initialErrors;
  let warningsValue = initialWarnings;
  function start() {
    const dataUnsubscriber = data.subscribe(($keyedData) => {
      var _a2, _b2;
      const $data = deepRemoveKey($keyedData);
      validateErrors($data, storesShape, config.validate);
      validateWarnings($data, storesShape, config.warn);
      _validateDebouncedErrors($data, storesShape, (_a2 = config.debounced) === null || _a2 === void 0 ? void 0 : _a2.validate);
      _validateDebouncedWarnings($data, storesShape, (_b2 = config.debounced) === null || _b2 === void 0 ? void 0 : _b2.warn);
    });
    const unsubscribeTouched = touched.subscribe(($touched) => {
      storesShape = deepSet($touched, []);
    });
    const unsubscribeErrors = errors.subscribe(($errors) => {
      errorsValue = $errors;
    });
    const unsubscribeWarnings = warnings.subscribe(($warnings) => {
      warningsValue = $warnings;
    });
    startErrors();
    startIsValid();
    startWarnings();
    startFilteredErrors();
    startFilteredWarnings();
    startIsValidating();
    function cleanup() {
      dataUnsubscriber();
      stopFilteredErrors();
      stopErrors();
      stopWarnings();
      stopFilteredWarnings();
      stopIsValid();
      stopIsValidating();
      unsubscribeTouched();
      unsubscribeErrors();
      unsubscribeWarnings();
    }
    return cleanup;
  }
  function publicErrorsUpdater(updater) {
    immediateErrors.set(updater(errorsValue));
    debouncedErrors.set({});
  }
  function publicWarningsUpdater(updater) {
    immediateWarnings.set(updater(warningsValue));
    debouncedWarnings.set({});
  }
  function publicErrorsSetter(value) {
    publicErrorsUpdater(() => value);
  }
  function publicWarningsSetter(value) {
    publicWarningsUpdater(() => value);
  }
  filteredErrors.set = publicErrorsSetter;
  filteredErrors.update = publicErrorsUpdater;
  filteredWarnings.set = publicWarningsSetter;
  filteredWarnings.update = publicWarningsUpdater;
  return {
    data,
    errors: filteredErrors,
    warnings: filteredWarnings,
    touched,
    isValid,
    isSubmitting,
    isDirty,
    isValidating,
    interacted,
    validateErrors: executeErrorsValidation,
    validateWarnings: executeWarningsValidation,
    cleanup: config.preventStoreStart ? () => void 0 : start(),
    start
  };
}
function createForm$1(config, adapters) {
  var _a, _b;
  (_a = config.extend) !== null && _a !== void 0 ? _a : config.extend = [];
  (_b = config.debounced) !== null && _b !== void 0 ? _b : config.debounced = {};
  if (config.validate && !Array.isArray(config.validate))
    config.validate = [config.validate];
  if (config.debounced.validate && !Array.isArray(config.debounced.validate))
    config.debounced.validate = [config.debounced.validate];
  if (config.transform && !Array.isArray(config.transform))
    config.transform = [config.transform];
  if (config.warn && !Array.isArray(config.warn))
    config.warn = [config.warn];
  if (config.debounced.warn && !Array.isArray(config.debounced.warn))
    config.debounced.warn = [config.debounced.warn];
  function addValidator(validator, { debounced, level } = {
    debounced: false,
    level: "error"
  }) {
    var _a2;
    const prop = level === "error" ? "validate" : "warn";
    (_a2 = config.debounced) !== null && _a2 !== void 0 ? _a2 : config.debounced = {};
    const validateConfig = debounced ? config.debounced : config;
    if (!validateConfig[prop]) {
      validateConfig[prop] = [validator];
    } else {
      validateConfig[prop] = [
        ...validateConfig[prop],
        validator
      ];
    }
  }
  function addTransformer(transformer) {
    if (!config.transform) {
      config.transform = [transformer];
    } else {
      config.transform = [
        ...config.transform,
        transformer
      ];
    }
  }
  const extender = Array.isArray(config.extend) ? config.extend : [config.extend];
  let currentExtenders = [];
  const _getCurrentExtenders = () => currentExtenders;
  const _setCurrentExtenders = (extenders) => {
    currentExtenders = extenders;
  };
  const { isSubmitting, isValidating, data, errors, warnings, touched, isValid, isDirty, cleanup, start, validateErrors, validateWarnings, interacted } = createStores(adapters.storeFactory, config);
  const originalUpdate = data.update;
  const originalSet = data.set;
  const transUpdate = (updater) => originalUpdate((values) => deepSetKey(executeTransforms(updater(values), config.transform)));
  const transSet = (values) => originalSet(deepSetKey(executeTransforms(values, config.transform)));
  data.update = transUpdate;
  data.set = transSet;
  const helpers = createHelpers({
    extender,
    config,
    addValidator,
    addTransformer,
    validateErrors,
    validateWarnings,
    _getCurrentExtenders,
    stores: {
      data,
      errors,
      warnings,
      touched,
      isValid,
      isValidating,
      isSubmitting,
      isDirty,
      interacted
    }
  });
  const { createSubmitHandler, handleSubmit } = helpers.public;
  currentExtenders = extender.map((extender2) => extender2({
    stage: "SETUP",
    errors,
    warnings,
    touched,
    data,
    isDirty,
    isValid,
    isValidating,
    isSubmitting,
    interacted,
    config,
    addValidator,
    addTransformer,
    setFields: helpers.public.setFields,
    reset: helpers.public.reset,
    validate: helpers.public.validate,
    handleSubmit,
    createSubmitHandler
  }));
  const formActionConfig = Object.assign({
    config,
    stores: {
      data,
      touched,
      errors,
      warnings,
      isSubmitting,
      isValidating,
      isValid,
      isDirty,
      interacted
    },
    createSubmitHandler,
    handleSubmit,
    helpers: Object.assign(Object.assign({}, helpers.public), {
      addTransformer,
      addValidator
    }),
    extender,
    _getCurrentExtenders,
    _setCurrentExtenders
  }, helpers.private);
  const { form } = createFormAction(formActionConfig);
  return Object.assign({
    data,
    errors,
    warnings,
    touched,
    isValid,
    isSubmitting,
    isValidating,
    isDirty,
    interacted,
    form,
    cleanup,
    startStores: start
  }, helpers.public);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function createForm(config) {
  const _a = createForm$1(config !== null && config !== void 0 ? config : {}, {
    storeFactory: writable
  }), { cleanup, startStores } = _a, rest = __rest(_a, ["cleanup", "startStores"]);
  onDestroy(cleanup);
  return rest;
}
export {
  _isPlainObject as _,
  createId as a,
  _get as b,
  createForm as c
};
