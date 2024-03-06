// const { Post } = require("../model/Forums/Post.model");
// const { Tag } = require("../model/Forums/tag.model");

// exports.getAllPosts = async (req, res) => {
//   let all_posts = await Post.find().populate("author", "name -_id");
//   res.send(all_posts);
// };

// exports.getPostById = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id).populate("author", "name username");
//     post.views += 1;
//     await post.save();
//     res.send(post);
//   } catch (ex) {
//     res.status(404).send(ex.message);
//   }
// };

// exports.createPost = async (req, res) => {
//   const tags = await Tag.find({ '_id': { $in: req.body.tags } });
//   if (tags.length !== req.body.tags.length) {
//     return res.status(400).send("One or more tags are invalid");
//   }

//   const post = new Post({
//     title: req.body.title,
//     tags: tags,
//     description: req.body.description,
//     author: req.user._id,
//     views: 1
//   });

//   try {
//     await post.save();
//     res.send("Post successfully created.");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// exports.likePost = async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   if (!post) {
//     return res.status(404).send("Post not found");
//   }

//   const index = post.upvotes.indexOf(req.user._id);
//   if (index === -1) {
//     post.upvotes.push(req.user._id);
//   } else {
//     post.upvotes.splice(index, 1);
//   }

//   await post.save();
//   res.send(post);
// };