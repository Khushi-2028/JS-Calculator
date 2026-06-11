const result = document.getElementById("res");

function Solve(value){
    result.value += value;
}

function Result(){

    try{

        let expression = result.value;

        let answer = eval(expression);

        if(answer === Infinity || isNaN(answer)){
            result.value = "Math Error";
            return;
        }

        result.value = answer;

    }catch{

        result.value = "Error";

    }
}

function Clear(){
    result.value = "";
}

function Back(){
    result.value = result.value.slice(0,-1);
}

function sqrt(){

    try{

        let value = eval(result.value);

        if(value < 0){
            result.value = "Math Error";
            return;
        }

        result.value = Math.sqrt(value);

    }catch{
        result.value = "Error";
    }
}

function cbrt(){

    try{

        let value = eval(result.value);

        result.value = Math.cbrt(value);

    }catch{
        result.value = "Error";
    }
}

function square(){

    try{

        let value = eval(result.value);

        result.value = Math.pow(value,2);

    }catch{
        result.value = "Error";
    }
}

function cube(){

    try{

        let value = eval(result.value);

        result.value = Math.pow(value,3);

    }catch{
        result.value = "Error";
    }
}

function power(){

    let exponent = prompt("Enter Power");

    if(exponent === null) return;

    try{

        let value = eval(result.value);

        result.value =
            Math.pow(value, Number(exponent));

    }catch{
        result.value = "Error";
    }
}

function log10(){

    try{

        let value = eval(result.value);

        if(value <= 0){
            result.value = "Math Error";
            return;
        }

        result.value = Math.log10(value);

    }catch{
        result.value = "Error";
    }
}

function ln(){

    try{

        let value = eval(result.value);

        if(value <= 0){
            result.value = "Math Error";
            return;
        }

        result.value = Math.log(value);

    }catch{
        result.value = "Error";
    }
}

function factorial(){

    try{

        let n = parseInt(eval(result.value));

        if(n < 0){
            result.value = "Math Error";
            return;
        }

        let fact = 1;

        for(let i=1;i<=n;i++){
            fact *= i;
        }

        result.value = fact;

    }catch{
        result.value = "Error";
    }
}

function insertPi(){
    result.value += Math.PI.toFixed(8);
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}

let scientificVisible = true;

function toggleScientific() {

    const panel =
        document.getElementById("scientific-panel");

    scientificVisible = !scientificVisible;

    if(scientificVisible){
        panel.style.display = "grid";
    }
    else{
        panel.style.display = "none";
    }
}

function changeTheme(color){

    document.documentElement
        .style
        .setProperty("--primary", color);
}

document.addEventListener("keydown", function(event){

    const key = event.key;

    if("0123456789+-*/.%()".includes(key)){
        Solve(key);
    }

    else if(key === "Enter"){
        Result();
    }

    else if(key === "Backspace"){
        Back();
    }

    else if(key.toLowerCase() === "c"){
        Clear();
    }
});