const Post = require('../models/post');

const testController = {
    createRecipes: async (req, res) => {
        try {
            // get the data from the request body
            const { title, content } = req.body;

            // create a new post
            const newPost = new Post({
                title,
                content
            });

            // save the post
            await newPost.save();

            // send a response
            res.status(201).json({ message: 'Recipes created successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getRecipes: async (req, res) => {
        try {
            // get all the posts from the database
            const posts = await Post.find().select('-__v');

            // send a response
            res.status(200).json({ posts });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getRecipe: async (req, res) => {
        try {
            // get the post id from the request parameters
            const { id } = req.params;

            // get the post from the database
            const post = await Post.findById(id).select('-__v');

            // send a response
            res.status(200).json({ post });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateRecipes: async (req, res) => {
        try {
            // get the post id from the request parameters
            const { id } = req.params;

            // get the data from the request body
            const { title, content } = req.body;

            // update the post
            await Post.findByIdAndUpdate(id, { title, content });

            // send a response
            res.status(200).json({ message: 'Recipes updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteRecipes: async (req, res) => {
        try {
            // get the post id from the request parameters
            const { id } = req.params;

            // delete the post
            await Post.findByIdAndDelete(id);

            // send a response
            res.status(200).json({ message: 'Recipes deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = testController;