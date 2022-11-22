import axios from "axios";

export default function fetchPostBySlug(username, slug) {
  const url = `https://www.tabnews.com.br/api/v1/contents/${username}/${slug}`;
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
    .then(fetchComments)
    .catch(throwApplicationError);
}

async function fetchComments(response) {
  const url = `https://www.tabnews.com.br/api/v1/contents/${response.owner_username}/${response.slug}/children`;
  console.log(url);
  const options = {
    method: "get",
    url: url,
    timeout: 1000 * 5, // Wait for 5 seconds
    headers: {
      "Content-Type": "application/json",
    },
  };
  const comments = await axios(options);
  if (comments) response.comments = comments.data;
  return response;
}

function parseResponse(response) {
  if (!response.data && response.status !== 200) {
    throw new Error("Erro ao solicitar suas postagens.");
  }
  return response.data;
}

function extractPostsFromResponse(response) {
  return response;
}

function throwApplicationError(error) {}
