const express = require('express');

const router = express.Router();
const users = require('../model/users');
const Response = require('../../utils/response');
const books = require('../model/books');

router.get('/',
  async (req, res) => {
    try {
        const data = await users.findAll({include: [books]});
        return Response.sendResponse(200, null, data, res);
    } catch (e) {
        console.log(e.message);
      return Response.sendError(e, 'modules -> global -> controllers -> auth.js', '/auth', res);
    }
  });

  router.post('/',
  async (req, res) => {
    try {
      const { name, registerNumber, yearOfStudy, bookBorrowedDate, deadLineToReturnBook, nameOfBook, bookSerialNumber } = req.body;
        await users.create({
          name,
          registerNumber,
          yearOfStudy,
          bookBorrowedDate,
          deadLineToReturnBook,
          nameOfBook,
          bookSerialNumber,
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
        const { id, name, registerNumber, yearOfStudy, bookBorrowedDate, deadLineToReturnBook, nameOfBook, bookSerialNumber } = req.body;
        await users.update({
          name,
          registerNumber,
          yearOfStudy,
          bookBorrowedDate,
          deadLineToReturnBook,
          nameOfBook,
          bookSerialNumber,
          updatedAt: Date.now()
        }, {
            where: {
                id
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
      const { id } = req.body;
        await users.destroy({
          where: {
            id
          }
        });
        return Response.sendResponse(200, null, '', res);
    } catch (e) {
      return Response.sendError(e, 'modules -> global -> controllers -> auth.js', '/auth', res);
    }
  });

module.exports = router;
