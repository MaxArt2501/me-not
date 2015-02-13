var dummy = {},
    proxy = new Proxy(dummy, {
        get: function(d, name) {
            return require(name);
        },
        deleteProperty: function(d, name) {
            var resolved = require.resolve(name);
            return delete require.cache[resolved];
        }
    });

module.exports = exports = proxy;