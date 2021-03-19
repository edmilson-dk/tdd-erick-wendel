const uuid = require('uuid');

class Todo {
  constructor({ text, when }) {
    this.text = text;
    this.when = when;

    this.state = '';
    this.id = uuid.v4();
  }
}

module.exports = Todo;