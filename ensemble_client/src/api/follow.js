import { BASE_URL } from "../config";

export const Follow = {
  create(params) {
    return fetch(`${BASE_URL}/posts/follow`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  delete(id) {
    return fetch(`${BASE_URL}/posts/follow`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json());
  }
};
