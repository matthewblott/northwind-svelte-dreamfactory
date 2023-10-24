import { z } from "zod";
import { g as getHost, s as sessionStore, i as isLoggedIn } from "./utils.js";
const UserSessionSchema = z.object({
  email: z.string().email(),
  first_name: z.string(),
  host: z.string(),
  id: z.number(),
  is_sys_admin: z.boolean(),
  last_login_date: z.coerce.date(),
  last_name: z.string(),
  name: z.string(),
  session_id: z.string(),
  session_token: z.string()
});
const Auth = {};
const scheme = "http";
const base_url = `${scheme}://${getHost()}/api/v2`;
Auth.login = async (email, password) => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });
  const credentials = {
    email,
    password
  };
  const body = JSON.stringify(credentials);
  const url = `${base_url}/user/session`;
  const response = await fetch(url, { method: "POST", headers, body });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  const parseResult = UserSessionSchema.safeParse(json);
  if (parseResult.success) {
    sessionStore.set(parseResult.data);
    isLoggedIn.set(true);
    return true;
  }
  return false;
};
Auth.logout = () => {
  sessionStore.set(null);
  isLoggedIn.set(false);
};
export {
  Auth as A
};
