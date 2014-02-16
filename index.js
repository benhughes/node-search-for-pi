var getPiNumber = function (maxSides) {

    var calculatePi = function (polygonSize, sideLength, maxLength) {
        var halfSideLength = sideLength / 2,
            sideA = Math.sqrt(1 - halfSideLength * halfSideLength),
            sideB = 1 - sideA,
            nextSideLength = Math.sqrt((sideB * sideB) + (halfSideLength * halfSideLength)),
            polygonPermiter = polygonSize * sideLength,
            pi = polygonPermiter/2;

        console.log(pi);
        if (polygonSize * 2 > maxLength) {
            return pi;
        } else {
            return calculatePi(polygonSize * 2, nextSideLength, maxLength);
        }
    };

    console.log("pi is", calculatePi(6, 1, 206158430208));
    console.log(Math.PI);

};

getPiNumber(192);