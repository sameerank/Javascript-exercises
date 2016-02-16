var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach(function(cb) {
      cb();
    });
  },
  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },
  removeChangedHandler: function(cb) {
    var indexOfCB = _callbacks.indexOf(cb);
    if (indexOfCB === -1) {
      return;
    } else {
      _callbacks.splice(indexOfCB, 1);
    }
  },
  all: function () {
    return _todos.slice();
  },
  fetch: function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/api/todos', true);
    request.onload = function(todos) {
      if (request.status >= 200 && request.status < 400) {
        _todos = todos;
        TodoStore.changed();
      } else {
        alert('error!');
      }
    };
    request.send();
  },

  create: function() {
    var request = new XMLHttpRequest();
    request.open('POST', '/api/todos', true);
    request.onload = function(todo) {
      if (request.status >= 200 && request.status < 400) {
        _todos.push(todo);
        TodoStore.changed();
      } else {
        alert('error!');
      }
    };
    request.send();
  }
};



module.exports = TodoStore;
