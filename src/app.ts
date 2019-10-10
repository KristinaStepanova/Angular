interface Converter {

    inputNumber: number;
    inputString: string;
    outputNumber: number;
    outputString: string;


    convertTo(): string;
    convertFrom(): number;
}

class Binary implements Converter {

    public inputNumber: number;
    public inputString: string;
    public outputNumber: number = 0;
    public outputString: string = '';

    constructor(inputNumber: number, inputString: string) {
        this.inputNumber = inputNumber;
        this.inputString = inputString;
    }

    public convertTo(): string {
        while (this.inputNumber >= 1) {
            this.outputString += Math.floor(this.inputNumber % 2);
            this.inputNumber = this.inputNumber / 2;
        }
        return this.outputString.split('').reverse().join('');
    }

    public convertFrom(): number {
        let index: number = this.inputString.length - 1;
        for (let i: number = 0; i < this.inputString.length; i++) {
            this.outputNumber += Number(this.inputString[i]) * Math.pow(2, index);
            index--;
        }
        return this.outputNumber;
    }
}

const converterB: Converter = new Binary(10, '1011');


class Octal implements Converter {

    public inputNumber: number;
    public inputString: string;
    public outputNumber: number = 0;
    public outputString: string = '';

    constructor(inputNumber: number, inputString: string) {
        this.inputNumber = inputNumber;
        this.inputString = inputString;
    }

    public convertTo(): string {
        while (this.inputNumber >= 1) {
            this.outputString += Math.floor(this.inputNumber % 8);
            this.inputNumber = this.inputNumber / 8;
        }
        return this.outputString.split('').reverse().join('');
    }

    public convertFrom(): number {
        let index: number = this.inputString.length - 1;
        for (let i: number = 0; i < this.inputString.length; i++) {
            this.outputNumber += Number(this.inputString[i]) * Math.pow(8, index);
            index--;
        }
        return this.outputNumber;
    }
}

const converterO: Converter = new Octal(100, '144');
// console.log(converterO.convertTo());
// console.log(converterO.convertFrom());

class Hex implements Converter {
    public inputNumber: number;
    public inputString: string;
    public outputNumber: number = 0;
    public outputString: string = '';

    constructor(inputNumber: number, inputString: string) {
        this.inputNumber = inputNumber;
        this.inputString = inputString;
    }

    public convertTo(): string {
        while (this.inputNumber >= 1) {
            let temp: string = String(Math.floor(this.inputNumber % 16));
            if (Number(temp) > 9) {
                switch (Number(temp)) {
                    case 10:
                        temp = 'A';
                        break;
                    case 11:
                        temp = 'B';
                        break;
                    case 12:
                        temp = 'C';
                        break;
                    case 13:
                        temp = 'D';
                        break;
                    case 14:
                        temp = 'E';
                        break;
                    case 15:
                        temp = 'F';
                        break;
                }
                if (this.inputNumber < 16) {
                    return temp;
                }
            }
            this.outputString += temp;
            this.inputNumber = Math.floor(this.inputNumber / 16);
        }
        return this.outputString.split('').reverse().join('');
    }

    public convertFrom(): number {
        let index: number = this.inputString.length - 1;
        let temp: number = 0;
        for (let i: number = 0; i < this.inputString.length; i++) {
            let charCode: number = Number(this.inputString[i].charCodeAt(0));
            if (charCode >= 65 && charCode <= 70) {
                switch (charCode) {
                    case 65:
                        temp = 10;
                        break;
                    case 66:
                        temp = 11;
                        break;
                    case 67:
                        temp = 12;
                        break;
                    case 68:
                        temp = 13;
                        break;
                    case 69:
                        temp = 14;
                        break;
                    case 70:
                        temp = 15;
                        break;
                }
            } else {
                temp = Number(this.inputString[i]);
            }
            this.outputNumber += temp * Math.pow(16, index);
            index--;
        }
        return this.outputNumber;
    }
}

const converterH = new Hex(75, '1E9');
// console.log(converterH.convertTo());
// console.log(converterH.convertFrom());