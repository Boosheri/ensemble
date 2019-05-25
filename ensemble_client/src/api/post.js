import { BASE_URL } from "../config";

export const Post = {
  all() {
    return fetch(`${BASE_URL}/posts`, {
      credentials: "include"
    }).then(res => res.json());
  },
  async one(id) {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      credentials: "include"
    });
    const post = await res.json();
    return post;
  },
  create(params) {
    return fetch(`${BASE_URL}/posts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};
