import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Post = new Schema({
		title: {
				type: String
		},
		description: {
				type: String
		},
		created_date: {
				type: Date,
				default: Date.now
		}
});

export default mongoose.model('Post', Post);
