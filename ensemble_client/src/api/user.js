import { BASE_URL } from "../config";

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  },

  one(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  },

  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json());
  }
};
