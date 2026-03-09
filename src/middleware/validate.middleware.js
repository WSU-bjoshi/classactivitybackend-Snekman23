export function validateBody(requiredFileds = []) {
  return (req, res, next) => {
    const missing = requiredFields.filter(
      (f) => req.body?.[f] === undefined || req.body?.[f] === "",
    );
    if (missing.length) {
      returnres
        .status(400)
        .json({ error: `Missing required fields: ${missing.join(",")}` });
    }
  };
  next();
}
