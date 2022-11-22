import fetchAllPosts from "./fetch/fetch-all-posts.js";
import fetchPost from "./fetch/fetch-post-by-slug.js";

export default function TabNewsPosts(username) {
  return new Posts(username);
}

class Posts {
  constructor(username) {
    this._username = username;
  }

  async fetchAll(exceptSlugs = [], userOptions = {}) {
    const options = overrideOptions(
      {
        page: 1,
        per_page: 100,
        strategy: "relevant",
      },
      userOptions
    );
    const posts = await fetchAllPosts(this._username, options);
    if (!posts) throw Error("Erro ao solicitar suas postagens.");
    return posts.filter((post) => {
      return !exceptSlugs.includes(post.slug);
    });
  }

  async fetchPostBySlug(slug) {
    const post = await fetchPost(this._username, slug);
    return post;
  }
}

function overrideOptions(defaultOptions, userOptions) {
  let _defaultOptions = { ...defaultOptions };
  for (let key in userOptions) {
    _defaultOptions[key] = userOptions[key];
  }
  return _defaultOptions;
}
