//task 1

const { interval, from, of } = require('rxjs');
const { filter, bufferCount, concatMap, delay } = require('rxjs/operators');

const publisher = interval(200)
    .pipe(filter((val) => val === 2 || val === 3 || val === 5 || val === 7
        || (val % 2 != 0 && val % 3 != 0 && val % 5 != 0 && val % 7 != 0)))
    .pipe(bufferCount(2))
    .pipe(concatMap(val => of(String(val[0] + val[1]))));

publisher.subscribe(
    val => {
        console.log(val);
    }
);

//task 2

const publisher2 = from([3, 3, 5, 1, 0, 45, 8, 4, 56, 7, 1, 4, 75, 24, 0, 3, 89, 3, 1, 67, 23, 45, 59, 3])
    .pipe(bufferCount(3))
    .pipe(concatMap(val => of(val).pipe(delay(2000))));

publisher2.subscribe(
    val => {
        console.log(val);
    }
);
