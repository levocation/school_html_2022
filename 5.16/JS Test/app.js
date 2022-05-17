const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        if (num1 - num2 < 0) return -(num1 - num2);
        else return num1 - num2;
    },
    
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    
    divide: function (num1, num2) {
        return num1 / num2;
    },
    
    mod: function (num1, num2) {
        return num1 % num2;
    },
    
    power: function (num1, num2) {
        return num1 ** num2;
    }
}

const n1 = Number(prompt("숫자 1 입력하세요."))
const n2 = Number(prompt("숫자 2 입력하세요."))

console.log(calculator.add(n1, n2));
console.log(calculator.subtract(n1, n2));
console.log(calculator.multiply(n1, n2));
console.log(calculator.divide(n1, n2));
console.log(calculator.mod(n1, n2));
console.log(calculator.power(n1, n2));

const player = {
    name: "전사",
    greet: function () {
        console.log(`나의 직업은 ${this.name}입니다.`);
    }
}

player.greet();