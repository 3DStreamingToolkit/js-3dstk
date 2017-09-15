var test = require('tape');

test('test', function (t) {
    t.plan(1);
    t.equal(typeof Date.now, 'function');
});
