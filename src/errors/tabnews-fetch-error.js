class TabNewsFetchError extends Error {
  constructor({ message, type, errors } = {}) {
    super();

    this.name = "TabNewsFetchError";
    this.message = message;
    this.type = type;
    this.errors = errors;
  }
}

export default TabNewsPostsError;
