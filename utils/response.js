module.exports = {
  sendResponse(statuscode, message, data, res) {
    return res.status(statuscode).send({
      status: statuscode,
      message,
      data,
      errors: null,
    });
  },

  permissionError(req, res) {
    return res.status(401).send({
      status: 401,
      message: 'You dont have permissions to perform this operation',
      data: null,
      errors: null,
    });
  },

  sendError(e, path, methodName, res) {
    return res.status(500).send({
      status: 500,
      message: 'Sorry something went wrong',
      data: null,
      errors: null,
    });
  },
};
