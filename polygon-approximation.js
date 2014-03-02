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

    console.log("pi is", calculatePi(6, 1, maxSides));
    console.log(Math.PI);

};

var maxSides = parseInt(process.argv[2], 10);
getPiNumber(maxSides);


//pi is 3.1415926535897936
//      3.141592653589793238462643383279502884197169399375105820974944592307816406286 20899862803482534211706798214