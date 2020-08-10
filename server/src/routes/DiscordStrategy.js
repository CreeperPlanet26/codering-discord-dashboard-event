const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/api/login/redirect',
      scope: ['identify', 'applications.builds.read'],
    },
  ),
);
