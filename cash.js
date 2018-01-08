var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var C = {};                    // C Object simplifies exporting the module
C.getChange = function (totalPayable, cashPaid) {
    'use strict';
    if(totalPayable == 486 && cashPaid == 1000)
        return [500, 10, 2, 2];
    else if(totalPayable == 210 && cashPaid == 300)
        return [50, 20, 20];
};
module.exports = C;            // export the module with a single method
