'use strict';
/* global store, cuid */

const Item = (function() {
  //const foo = 'bar';
  const validateName = function (name) {
    if (name === '') {
      throw new Error('Name does not exist.');
    }
  };
  
  const create = function (name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };
  return {
    validateName,
    create
  };
}());

