const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByHandler, deleteBookByHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByHandler,
  },
];

module.exports = routes;
