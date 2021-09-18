import mongoose from "mongoose";

// mongoose.set('bufferCommands', false);

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: String,
  shares: String,
  messages: String,
});

// Collection inside database
export default mongoose.model('tiktokVideos', tiktokSchema);
