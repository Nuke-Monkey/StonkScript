//first commit

var Equ = ""

var operations = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "p", "+", "-", "*", "/", "^", "(", ")"]


function equ_init(){
    for (let i = 0; i < 15; i++) {
        Equ = Equ + operations[Math.round(Math.random() * 14)];
    }
    
}

function equ_clean(){
    let EquPreview = ""
    for (let i = 0; i < Equ.length; i++) {
        console.log(Equ[i], operations.indexOf(Equ[i]))
        if (!(operations.indexOf(Equ[i]) > 9 && operations.indexOf(Equ[i-1]) > 9)) {
            if (!(operations.indexOf(Equ[i]) > 9 && (Equ[i+1] == null || Equ[i-1] == null))) {
                EquPreview = EquPreview + Equ[i]
            }
        }
    }


    Equ = EquPreview
}

var p = "*0.6*"

function equ_solve() {
    return eval(Equ.replace("p", p));
}


equ_init()
console.log(Equ)
equ_clean()
console.log(Equ)
console.log(equ_solve())