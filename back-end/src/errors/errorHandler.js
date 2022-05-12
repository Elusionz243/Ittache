/**
 * Express API error handler.
 */

const errorHandler = (error, req, res, next) =>
  res.status(error.status).json({ error: error.message });

module.exports = errorHandler;