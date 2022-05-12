const asyncErrorHandler = (delegate, defaultStatus) => {
  return async (req, res, next) => {
    try {
      await Promise.resolve();
      return await delegate(req, res, next);
    } catch (error) {
      next({ status: error.status, message: error.message });
    }
  };
};

module.exports = asyncErrorHandler;
