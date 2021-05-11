module.exports = callbacks => (req, res, next) => Promise.resolve(callbacks(req, res, next)).catch(next)