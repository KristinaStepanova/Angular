enum Weather {
    Windy = 1,
    Sunny,
    Rainy,
    Cloudy
}

function getRandomTime(min: number, max: number) {
    return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

function getRandomEnum(min: number, max: number) {
    return Math.round((Math.random() * (max - min) + min));
}


const prom1 = function (): Promise<number> {
    return new Promise<number>((resolve: (data: number) => void, reject: (err: string) => void) => {
        let randomTime: number = getRandomTime(0.5, 3);
        let randomEnum: number = getRandomEnum(1, 4);
        console.log(randomEnum);
        setTimeout(function () {
            resolve(randomEnum)
        }, randomTime * 1000);
    })
}

prom1().then((data: number): string => {
    console.log(Weather[data]);
    return Weather[data];
});

Promise.race([prom1(), prom1(), prom1(), prom1()]).then((data: number): string => {
    console.log(Weather[data]);
    return Weather[data];
});

function createPromiseArray(): Array<Promise<number>> {
    let prArr: Promise<number>[] = new Array();
    for (let i = 0; i < 40; i++) {
        prArr.push(prom1());
    }
    return prArr;
}

function mostCommonElement(data: number[]): number {

    let arrLength: number = 0;
    let result: number = 0;

    for (let i: number = 1; i <= 4; i++) {
        let arr: Array<number> = data.filter(item => item === i);
        if (arrLength < arr.length) {
            arrLength = arr.length;
            result = arr[i];
        }
    }
    return result;
}

Promise.all(createPromiseArray()).then((data: number[]): string => {
    let weatherString: string = Weather[mostCommonElement(data)]
    console.log(weatherString);
    return weatherString;
});