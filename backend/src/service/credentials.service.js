const user = require("../model/user.model").userData;

module.exports = {
  async get() {
    return await user.find({});
  },
  async login(content) {
    return await user.findOne({
      email: content.email,
      password: content.password,
    });
  },
  async post_book(content) {
    let userContent = await user.findOne({ id: content.userId });
    return await user.updateOne({
      id: content.userId,
      $set: { bookId: [...userContent.bookId, content] },
    });
  },
  async update_book(content) {
    let userContent = await user.findOne({ id: content.userId });
    let books = userContent.bookId.map((book) => {
      if (book.id === content.id) {
        book = content;
      }
      return book;
    });
    return await user.updateOne({
      id: content.userId,
      $set: { bookId: [...books] },
    });
  },
  async post(content) {
    content.active = true;
    return await user.create(content);
  },
  async put(id, content) {
    return await user.updateOne({ id: id, $set: { ...content } });
  },
  async delete(id) {
    return await user.updateOne({ id: id, $set: { active: false } });
  },
};
