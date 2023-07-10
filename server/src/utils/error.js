class MyError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = MyError;
