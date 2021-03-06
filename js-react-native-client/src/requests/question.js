import { BASE_URL } from "./config";

const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, { credentials: "include" }).then(
      res => res.json()
    );
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/questions/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

export default Question;
