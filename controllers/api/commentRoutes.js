const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments //

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await Comment.findAll({
            include: [User],
        });

        const comments = userData.map((comment) => comment.get({ plain: true }));
        res.render('single-post', {comments, loggedIn: req.session.loggedIn});
    } catch(err) {
        res.status(500).json(err);
    }
});

// Post new Comment //

router.post('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newComment = await Comment.create({
            ...body,
            userId: req.session.userId,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;