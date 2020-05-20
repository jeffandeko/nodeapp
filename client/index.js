var FzBz = function () {
    for (let i = 1; i <= 100; i++){
        let a = i % 3 == 0, b = i % 5 == 0;
        console.log(a? b? "FizzBuzz": "Fizz": b? "Buzz": i)
    }
}