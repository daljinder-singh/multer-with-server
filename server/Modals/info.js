const mongoose = require("mongoose");

const { Schema } = mongoose;
const blogSchema = new Schema({
    avatar: {
        data: Buffer, 
        contentType: String 
      },
      size: {
        type: Number
      }
      // Name: {
      //   type: String,
      //   required: true,
      // }
  },{timestamp: true});
  module.exports = mongoose.model('Blog', blogSchema, 'blog');
