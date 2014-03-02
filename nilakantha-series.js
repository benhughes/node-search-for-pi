var getPiNumber = function (maxIterations) {
    'use strict';

    var finished = function (number) {
        console.log('pi is', number);
        console.log('real pi is ', Math.PI);
    };

    var pi = 3, currentIteration = 1, oldPi;

    var calculatePi = function () {
        var add, times, divideBy;
        console.log(currentIteration, maxIterations);


        if (currentIteration >= maxIterations) {
            finished(pi);
            return;
        }

        oldPi = pi;

        add = currentIteration % 2 !== 0;
        times = currentIteration * 2;
        divideBy = 4 / (times * (times + 1) * (times + 2));

        pi = (add) ? pi + divideBy : pi - divideBy;

        currentIteration ++;

        setImmediate(calculatePi);

    };

    calculatePi();

};
var maxIterations = parseInt(process.argv[2], 10);
getPiNumber(maxIterations);

//pi is 3.141592653589787
//      3.141592653589793238462643383279502884197169399375105820974944592307816406286 20899862803482534211706798214