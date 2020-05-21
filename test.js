var area = require('../triangle');
var assert = require('assert');

describe('Area', function(){
    it('should return 6 when the base is 3 and the height is 4', function(){
        assert.equal(area.triangleArea(3,4),6);
    });
});