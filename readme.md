## TabNews Posts

Get your posts with nodejs and use it in your personal blog.

`import MyTabNewsPosts from "./src/tabnews-posts.js";`

`const myPosts = MyTabNewsPosts("evertonribas");`

Fetch relevant posts of a user.

```
myPosts.fetchAll().then(
    (posts) => { console.log(posts); }
).catch(
    err => {}
);
```

Fetch a post and your comments by slug

```
myPosts.fetchPostBySlug("blog-pessoal-a-partir-das-apis-tabnews").then((e) => {
   console.log(e, "index.js");
});
```

if you want exclude some post you can add a filter

```

const filter = ["blog-pessoal-a-partir-das-apis-tabnews"]

myPosts.fetchAll(filter).then(
    (posts) => { console.log(posts); }
).catch(
    err => {}
);
```

## TODO

### Query String of all posts

GET {{BaseUrl}}/{user}?page={pagina}&per_page={porPagina}&strategy={estrategia}

### Error controller
