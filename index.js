function display(value){
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById("result").value = "";

}
function calculate(){
    let v = document.getElementById("result").value;
    clearScreen();
    display(eval(v));
}