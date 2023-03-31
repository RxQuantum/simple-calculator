function display(value){
    document.getElementById('result').value += value;
    return value
}

function solve(){
    if(equantion === '') return ''
        let equation  = document.getElementById("result").value;
        let solution = eval(equation);
        document.getElementById("result2").value = solution;  
        
    }

function clearScreen(){
    document.getElementById("result2").value = "";
    document.getElementById("result").value = "";
}
