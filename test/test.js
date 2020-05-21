var area = require('../triangle.js');
var assert = require('assert');

describe('Area', function(){
    it('should return 6 when the base is 3 and the height is 4', function(){
        assert.equal(area(3,4),6);
    });
});