/* global Q, console*/

(function(_midi) {
  'use strict';

  function getMidiSuccessCallback(deferred) {
    return function(midiAccess) {
      return deferred.resolve({
        inputs: midiAccess.inputs,
        outputs: midiAccess.outputs
      }); 
    };
  }

  _midi.getDevices = function() {
    var deferred = Q.defer();
    window.navigator.requestMIDIAccess().then(getMidiSuccessCallback(deferred),
        function() { console.log('Error requesting MIDI access'); });

    return deferred.promise;
  };

})(window.midi = window.midi || {});
