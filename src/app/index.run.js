(function() {
  'use strict';

  angular
    .module('primeDigitalTechTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
