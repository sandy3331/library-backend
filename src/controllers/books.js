const express = require('express');

const router = express.Router();
const books = require('../model/books');
const Response = require('../../utils/response');

router.get('/',
  async (req, res) => {
    try {
        const data = await books.findAll({});
        return Response.sendResponse(200, null, data, res);
    } catch (e) {
      return Response.sendError(e, 'modules -> global -> controllers -> auth.js', '/auth', res);
    }
  });

  router.post('/',
  async (req, res) => {
    try {
      const { bookName, authorName, dateOfPublication, description, numberOfBooksInStock } = req.body;
        await books.create({
          bookName,
          authorName,
          dateOfPublication,
          description,
          numberOfBooksInStock,
          createdAt: Date.now()
        });
        return Response.sendResponse(201, null, '', res);
    } catch (e) {
      return Response.sendError(e, 'modules -> global -> controllers -> auth.js', '/auth', res);
    }
  });

  router.put('/',
  async (req, res) => {
    try {
      const { bookName, authorName, dateOfPublication, description, numberOfBooksInStock, serialNumber } = req.body;
        await books.update({
          bookName,
          authorName,
          dateOfPublication,
          description,
          numberOfBooksInStock,
          updatedAt: Date.now()
        }, {
          where: {
            serialNumber
          }
        });
        return Response.sendResponse(200, null, '', res);
    } catch (e) {
      return Response.sendError(e, 'modules -> global -> controllers -> auth.js', '/auth', res);
    }
  });

  router.delete('/',
  async (req, res) => {
    try {
      const { serialNumber } = req.body;
        await books.destroy({
          where: {
            serialNumber
          }
        });
        return Response.sendResponse(200, null, '', res);
    } catch (e) {
      return Response.sendError(e, 'modules -> global -> controllers -> auth.js', '/auth', res);
    }
  });

module.exports = router;
