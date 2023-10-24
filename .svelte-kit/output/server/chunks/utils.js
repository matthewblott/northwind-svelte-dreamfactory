import { w as writable } from "./index2.js";
import { Capacitor } from "@capacitor/core";
const sessionStore = writable(null);
const isLoggedIn = writable(false);
const PUBLIC_HOST_IP = "10.0.2.2";
const getHost = () => {
  let domain = "localhost";
  const platform = Capacitor.getPlatform();
  if (platform === "android") {
    domain = PUBLIC_HOST_IP;
  }
  const port = 5e3;
  const host = `${domain}:${port}`;
  return host;
};
export {
  getHost as g,
  isLoggedIn as i,
  sessionStore as s
};
