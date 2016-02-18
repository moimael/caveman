jest.autoMockOff();

describe('App', function () {
 it('should work', function () {
   var App = require('../app');
   expect(App).toBeDefined();
 });
});
