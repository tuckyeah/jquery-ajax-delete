'use strict';

const app = require('../app.js');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET',
  });
};

const create = function (data) {
  return $.ajax({
    url: app.host + '/books',
    method: 'POST',
    data: data,
  });
};

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE',
  });
};

module.exports = {
  index,
  show,
  create,
  destroy
};
