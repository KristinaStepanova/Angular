const { Observable: { create }, interval } = require('rxjs');
const { merge, filter } = require('rxjs/operators');

//task 1
const publisher = create((observer) => {
    let counter = 0;
    let delay = 0;
    let fibArr = [0, 1];
    const interval = setTimeout(function func() {
        observer.next(counter);
        counter++;
        let arrLength = fibArr.length;
        fibNumber = fibArr[arrLength - 1] + fibArr[arrLength - 2];
        fibArr.push(fibNumber);
        delay = fibArr[arrLength - 2] * 1000;
        const interval = setTimeout(func, delay);
    }, delay);
})

const subscriber = publisher.subscribe(
    (val) => {
        console.log(val);

    },
    (err) => {
        console.log('error');
    },
    () => {
        console.log('observer is dead');
    }
)

// task 2

const publisher1 = interval(100);
const publisher2 = interval(300)
.pipe(merge(publisher1))
.pipe(filter(val => 
    val >= 5 && val < 12
));

publisher2.subscribe(
    (val) => {
        console.log(val);
    }
)

//task 3 ---> task1

//task 4
function getFromObserver(arr) {
    const publisher3 = create((observer) => {
        arr.forEach(item => {
            observer.next(item);
        });
        observer.complete();
    });

    const subscriber = publisher3.subscribe(
        (val) => {
            console.log(val);
        },
        (err) => {
            console.log('error');
        },
        () => {
            console.log('observer is dead');
        }
    );
    return publisher3;
}

getFromObserver([1, 9, 56, 3, 0, 5, 67, 34]);

// task 5
function getFromWithDelay(arr, del) {
    const publisher4 = create((observer) => {
        arr.forEach(item => {
            del = Math.round((Math.random() * 10)) * 1000;
            setTimeout(() => {
                observer.next(item);
            }, del);
        });
    });

    const subscriber = publisher4.subscribe(
        (val) => {
            console.log(val);
        },
        (err) => {
            console.log('error');
        },
        () => {
            console.log('observer is dead');
        }
    );
    return publisher4;
}

getFromWithDelay([1, 9, 56, 3, 0, 5, 67, 34], 0);


