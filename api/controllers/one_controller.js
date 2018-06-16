import { Post } from './../models';

export const get = (req, res) => {
		Post.find({}, (err, posts) => {
				if (err) return res.status(500).send("There was a problem finding the posts.");
				if (!posts) return res.status(404).send("No posts found.");
				res.status(200).send(posts);
		});
}

export const getid = (req, res) => {
		Post.findById(req.params.id, (err, post) => {
				if (err) return res.status(500).send("There was a problem finding the post.");
				if (!post) return res.status(404).send("No post found.");
				res.status(200).send(post);
		});
}

export const post = (req, res) => {
		Post.create({
				title: req.body.title,
				description: req.body.description,
		}, (err, post) => {
				if (err) return res.status(500).send("There was a problem adding the information to the database.");
				res.status(200).send(post);
		});
}

export const put = (req, res) => {
		Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, post) => {
				if (err) return res.status(500).send("There was a problem updating the post.");
				res.status(200).send(post);
		});
}

export const del = (req, res) => {
		Post.findByIdAndRemove(req.params.id, (err, post) => {
				if (err) return res.status(500).send("There was a problem deleting the post.");
				res.status(200).send("Post: " + post._id + " was deleted.");
		});
}

export default { get, getid, post, put, del }
