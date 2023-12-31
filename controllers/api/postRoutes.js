const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new Post //

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...body,
            userId: req.session.userId
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update existing Post //

router.put('/:id', withAuth, async (req, res) => {
    try {
        const [post] = await Post.update(req.body, {
            where: { id: req.params.id }
        });

        if (post > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete existing Post //

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [post] = Post.destroy ({
            where: { id: req.params.id }
        });

        if (post > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;