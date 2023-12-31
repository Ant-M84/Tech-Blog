const router = require('express').Router();
const { User } = require('../../models');

// Create account //

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      pasword: req.body.password
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login to account //

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { username: req.body.username } 
    });

    if (!userData) {
      res.status(400).json({ message: 'Sorry, no user found by that name!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Sorry, no user found by that name!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout from account //

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;