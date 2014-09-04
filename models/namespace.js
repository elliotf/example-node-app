var base = require("./base");

var Namespace = base.extend({
  tableName: 'namespaces'
}, {
});

module.exports = base.bookshelf.model('Namespace', Namespace);
