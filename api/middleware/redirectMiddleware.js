// monitor wildcard for performance? this isn't strictly necessary
// after all, who is purposefully going to thomasjuhoonkim-api.herokuapp.com
export const redirectHeroku = (req, res, next) => {
  const host = req.header("host");
  if (host.match(/.*herokuapp\..*/)) {
    res.redirect(301, "https://api.thomasjuhoonkim.me" + req.originalUrl);
  } else next();
};
