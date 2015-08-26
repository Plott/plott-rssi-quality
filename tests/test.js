var rssiQuality = require('../'),
    test = require('tape'),
    path = require('path');

    test('dBm', function (t){
      var quality = rssiQuality(-75);
      t.equal(quality, 0.5, 'value ok');
      quality = rssiQuality(-100);
      t.equal(quality, 0,  'value ok');
      quality = rssiQuality(-50);
      t.equal(quality, 100, 'value ok');

      t.throws(function(){
        rssiQuality('dog');
      }, 'Integer Required');

      t.end();
    });
