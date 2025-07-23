// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    //     switch (true) {
    //         case a > b && a > c:
    //             return a
    //         case b > a && b > c:
    //             return b
    //         case c > b && c > a:
    //             return c
    //     }

    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > b && c > a) {
        return c
    }
}

console.log(findLargest(2, 17, 3));

