import MyTabNewsPosts from "./src/tabnews-posts.js";

const myPosts = MyTabNewsPosts("evertonribas");

myPosts.fetchAll().then((e) => {
  console.log(e, "index.js");
});

myPosts.fetchPostBySlug("blog-pessoal-a-partir-das-apis-tabnews").then((e) => {
  console.log(e, "index.js");
});

export default MyTabNewsPosts;
