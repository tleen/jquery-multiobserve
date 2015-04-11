$(document).on('ready', function(){
  'use strict';

  QUnit.test('Hello test', function(assert){
    var allClicked = false;
    var numClicks = 0;

    $('#buttons button').multiobserve({
      on : 'click',
      any : function(){
	numClicks++;
      },
      all : function(){
	allClicked = true;
      }
    }).trigger('click');

    assert.ok(numClicks === 3);
    assert.ok(allClicked);

  });
});
