const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Retrieve all posts //

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('allPostsUser', { posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

// Retrieve single post //

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {id: req.params.id},
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                }
            ]
        });

        if (postData) {
            const post = postData.get({ plain: true });
            res.render('singlePost', { post, loggedIn: req.session.loggedIn });
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// login //

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// Create account //

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

module.exports = router;