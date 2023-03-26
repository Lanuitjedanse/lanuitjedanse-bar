import axios from "src/Axios.js";
import { v4 as uuidv4 } from "uuid";

export const getToken = () => {
  return window.localStorage.getItem("token");
};

export const getAllCategories = async () => {
  const token = getToken();
  const { data } = await axios.get(
    "https://api.spotify.com/v1/browse/categories?limit=50",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.categories.items;
};

export const getAccessPermission = () => {
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;
  const state = uuidv4();

  window.localStorage.setItem("uuid", state);
  const scope = "user-read-private user-read-email";

  let url = process.env.AUTH_ENDPOINT;
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  window.location.href = url;
};
