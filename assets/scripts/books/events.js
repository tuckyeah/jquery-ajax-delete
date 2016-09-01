'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $('#get-book-id').val();

  if (bookId.length === 0) {
    api.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    api.show(bookId)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};


const onCreateBook = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
    .done()
    .fail();
};


const onDeleteBook = function (event) {
  event.preventDefault();

  // let bookId = $('#delete-book-id').val();

  console.log("event.target is: ", event.target);
  let data = getFormFields(event.target);
  console.log("data is: ", data);

  api.destroy(data.book.id)
    .done(ui.onDeleteSuccess)
    .fail(ui.onError);
};

module.exports = {
  onGetBooks,
  onDeleteBook,
  onCreateBook
};
