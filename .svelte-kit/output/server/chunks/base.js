import { g as getHost, s as sessionStore } from "./utils.js";
const scheme = "http";
const base_url = `${scheme}://${getHost()}/api`;
const Base = {};
new Headers({
  "Content-Type": "application/json"
});
const baseAction = async (url, action, body) => {
  sessionStore.subscribe((value) => {
  });
  const headers2 = new Headers({
    // 'Content-Type': 'application/json',
    // 'X-DreamFactory-API-Key': PUBLIC_API_KEY,
    // 'X-DreamFactory-Session-Token': info.session_token
  });
  let response;
  if (body === void 0 || body === "") {
    response = await fetch(url, { method: action, headers: headers2 });
  } else {
    response = await fetch(url, { method: action, headers: headers2, body });
  }
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
const baseFetch = async (url) => {
  return baseAction(url, "GET");
};
const baseCreate = async (url, body) => {
  return baseAction(url, "POST", body);
};
const baseUpdate = async (url, body) => {
  return baseAction(url, "PUT", body);
};
const baseRemove = async (url) => {
  return baseAction(url, "DELETE");
};
Base.fetchAll = async (table_name) => {
  const url = `${base_url}/${table_name}`;
  return baseFetch(url);
};
Base.fetchDistinct = async (table_name, field_name) => {
  const url = `${base_url}/${table_name}?fields=${field_name}&group=${field_name}&filter=${field_name} is not null`;
  return baseFetch(url);
};
Base.fetchPaged = async (table_name, limit, offset) => {
  if (offset === 0) {
    offset++;
  }
  let pageNumber = offset;
  const url = `${base_url}/${table_name}?limit=${limit}&offset=${offset}&include_count=true&page[number]=${pageNumber}`;
  return baseFetch(url);
};
Base.fetchFiltered = async (table_name, filter) => {
  const url = `${base_url}/${table_name}?filter=${filter}`;
  return baseFetch(url);
};
Base.fetchFilteredPaged = async (table_name, limit, offset, filter) => {
  const url = `${base_url}/${table_name}?limit=${limit}&offset=${offset}&include_count=true&filter=${filter}`;
  return baseFetch(url);
};
Base.fetchById = async (table_name, id) => {
  const url = `${base_url}/${table_name}/${id}`;
  return baseFetch(url);
};
Base.create = async (table_name, body) => {
  const url = `${base_url}/${table_name}`;
  return baseCreate(url, body);
};
Base.createByFields = async (table_name, fields, body) => {
  const url = `${base_url}/${table_name}?id_field=${fields}`;
  return baseCreate(url, body);
};
Base.updateById = async (table_name, id, body) => {
  const url = `${base_url}/${table_name}/${id}`;
  return baseUpdate(url, body);
};
Base.update = async (table_name, id, body) => {
  return await Base.updateById(table_name, id, body);
};
Base.updateByFields = async (table_name, fields, body) => {
  body = body.replace(":true", ":1");
  const url = `${base_url}/${table_name}?id_field=${fields}`;
  return baseUpdate(url, body);
};
Base.remove = async (table_name, id) => {
  const url = `${base_url}/${table_name}/${id}`;
  return baseRemove(url);
};
Base.removeByFilter = async (table_name, filter) => {
  const url = `${base_url}/${table_name}?filter=${filter}`;
  return baseRemove(url);
};
export {
  Base as B
};
