import axios from "axios";

export default function fetchAllPosts(username, queryString) {
  const url = `https://www.tabnews.com.br/api/v1/contents/${username}?page=${queryString.page}&per_page=${queryString.per_page}&strategy=${queryString.strategy}`;

  const options = {
    method: "get",
    url: url,
    timeout: 1000 * 5, // Wait for 5 seconds
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(options)
    .then(parseResponse)
    .then(extractPostsFromResponse)
    .catch(throwApplicationError);
}

function parseResponse(response) {
  if (response && response.status !== 200) {
    throw new Error("Erro ao solicitar suas postagens.");
  }

  return response.data.filter((post) => {
    return post.title !== null && post.status === "published";
  });
  //   return response.json();
}

function extractPostsFromResponse(response) {
  return response;
}

function throwApplicationError(error) {}
