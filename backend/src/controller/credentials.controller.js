const user = require("../service/credentials.service");

exports.get = async function (req, res) {
  result = await user.get();
  res.send(result);
};

exports.login = async function (req, res) {
  result = req.body;
  let payload = await user.login(result);
  let new_payload = {
    name: payload.name,
    id: payload.id,
    bookId: payload.bookId,
  };
  res.send(new_payload);
};
exports.post_book = async function (req, res) {
  result = req.body;
  result.id = req.body.userId + "_" + Math.random().toString(36).substr(2, 9);
  payload = await user.post_book(result);
  res.send(payload);
};
exports.update_book = async function (req, res) {
  result = req.body;
  payload = await user.update_book(result);
  res.send(payload);
};
exports.post = async function (req, res) {
  result = req.body;
  result.id =
    "_" +
    Math.random().toString(36).substr(2, 9) +
    "_" +
    Math.random().toString(36).substr(2, 9);
  payload = await user.post(result);
  res.send(payload);
};
exports.put = async function (req, res) {
  result = req.body;
  payload = await user.put(result.id, result);
  res.send(payload);
};
exports.delete = async function (req, res) {
  result = req.body;
  payload = await user.delete(result.id);
  res.send(payload);
};
