import passport from 'passport';

export default (req, res, next) => {
    return passport.authenticate('jwt', async (error, user) => {
        if (error) {
            res.status(403).json({
                error: 'You do not have access to this resource.'
            });
        } else if (!user) {
            res.status(403).json({
                error: 'You do not have access to this resource.'
            });
        } else {
            req.user = user;
            next();
        }
    })(req, res, next);
};