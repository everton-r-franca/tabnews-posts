### TabNews Posts

Get your posts with nodejs and use it in your personal blog.

`import MyTabNewsPosts from "./src/tabnews-posts.js";`

`const myPosts = MyTabNewsPosts("evertonribas");`

Fetch relevant posts of user.

```myPosts.fetchAll().then(
    (posts) => { console.log(posts); }
   ).catch(
    err => {}
   );
```

Fetch a post by slug and your comments

```myPosts.fetchPostBySlug("blog-pessoal-a-partir-das-apis-tabnews").then((e) => {
    console.log(e, "index.js");
    });
```
