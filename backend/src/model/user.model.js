const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/WritefyDatabase", {
  useNewUrlParser: true,
});
let Schema = mongoose.Schema;
let userSchema = new Schema({
  id: String,
  bookId: [
    {
      userId: String,
      id: String,
      name: String,
      cover: String,
      resume: String,
      author: String,
      createdAt: Date,
      rank: Number,
    },
  ],
  name: String,
  imagePath: String,
  password: String,
  email: String,
  active: Boolean,
});
exports.userData = mongoose.model("user", userSchema);
