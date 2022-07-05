const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>'); // utility function to send response, body with any Type. default content=type is text/html
});

module.exports = router;
