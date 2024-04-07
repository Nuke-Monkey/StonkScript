//first commit

var Equation = ""

var operations = ["+", "-", "*", "/", "^", "(", ")"]

for (let i = 0; i < 24; i++) {
    Equation + operations[Math.round(Math.random * 5)];
}