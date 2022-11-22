class TabNewsPostsError extends Error {
  constructor({ message, type, errors } = {}) {
    super();

    this.name = "TabNewsPostsError";
    this.message = message;
    this.type = type;
    this.errors = errors;
  }
}

export default TabNewsPostsError;
