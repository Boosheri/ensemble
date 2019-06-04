import { BASE_URL } from "../config";

export const Post = {
  all() {
    return fetch(`${BASE_URL}/posts`, {
      credentials: "include"
    }).then(res => res.json());
  },

  roles() {
    return fetch(`${BASE_URL}/roles`, {
      credentials: "include"
    }).then(res => res.json());
  },

  // async one(id) {
  //   const res = await fetch(`${BASE_URL}/posts/${id}`, {
  //     credentials: "include"
  //   });
  //   const post = await res.json();
  //   return post;
  // },
  async one(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      credentials: "include"
    })
    .then(res => res.json());
  },

  async user(id) {
    return fetch(`${BASE_URL}/my_posts`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  },

  async relevant(id) {
    return fetch(`${BASE_URL}/relevant_posts`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  },

  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
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
